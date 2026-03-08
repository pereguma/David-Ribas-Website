import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    if (currentIndex === null || !images[currentIndex]) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm animate-in fade-in duration-300">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black transition-colors"
                aria-label="Close lightbox"
            >
                <X size={32} strokeWidth={1.5} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
                {images.length > 1 && (
                    <button
                        onClick={onPrev}
                        className="absolute left-4 md:left-8 p-3 text-gray-400 hover:text-black transition-colors"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>
                )}

                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt || 'Artwork'}
                    className="max-h-full max-w-full object-contain animate-in fade-in zoom-in-95 duration-500"
                />

                {images.length > 1 && (
                    <button
                        onClick={onNext}
                        className="absolute right-4 md:right-8 p-3 text-gray-400 hover:text-black transition-colors"
                        aria-label="Next image"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>
                )}
            </div>
        </div>
    );
}
