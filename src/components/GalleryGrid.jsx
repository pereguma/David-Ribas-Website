import { useState } from 'react';
import Lightbox from './Lightbox';

export default function GalleryGrid({ images }) {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const handleOpen = (index) => setLightboxIndex(index);
    const handleClose = () => setLightboxIndex(null);
    const handleNext = () => setLightboxIndex((prev) => (prev + 1) % images.length);
    const handlePrev = () => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            <div className={`grid gap-8 md:gap-12 ${images.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto w-full' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}>
                {images.map((image, idx) => (
                    <div
                        key={idx}
                        className="aspect-square cursor-pointer overflow-hidden group bg-gray-50 flex items-center justify-center"
                        onClick={() => handleOpen(idx)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || 'Gallery image'}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    images={images}
                    currentIndex={lightboxIndex}
                    onClose={handleClose}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            )}
        </>
    );
}
