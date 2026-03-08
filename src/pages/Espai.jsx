import GalleryGrid from '../components/GalleryGrid';

export default function Espai() {
    const espaiImages = [
        { src: '/Espai/Espai1.jpg', alt: 'Espai David Ribas 1' },
        { src: '/Espai/Espai2.jpg', alt: 'Espai David Ribas 2' },
        { src: '/Espai/Espai3.jpg', alt: 'Espai David Ribas 3' },
        { src: '/Espai/Habitacio3.jpg', alt: 'Espai David Ribas 4' },
        { src: '/Espai/Habitacio4.jpg', alt: 'Espai David Ribas 5' },
        { src: '/Espai/Habitacio5.jpg', alt: 'Espai David Ribas 6' },
        { src: '/Espai/Habitacio6.jpg', alt: 'Espai David Ribas 7' },
        { src: '/Espai/Espai5.jpg', alt: 'Espai David Ribas 8' },
        { src: '/Espai/Espai6.jpg', alt: 'Espai David Ribas 9' },
    ];

    const habitacioImages = [
        { src: '/Espai/Habitacio1.jpg', alt: 'Antigua habitació HD Riudebitlles 1' },
        { src: '/Espai/Habitacio7.jpg', alt: 'Antigua habitació HD Riudebitlles 2' },
        { src: '/Espai/Habitacio10.jpg', alt: 'Antigua habitació HD Riudebitlles 3' },
    ];

    return (
        <div className="animate-in fade-in duration-700 flex flex-col gap-16 md:gap-24 pt-8">
            {/* Introduction */}
            <section className="max-w-3xl mx-auto flex flex-col gap-8 text-center bg-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                    L'Espai
                </h1>
                <div className="flex flex-col gap-6 text-xl leading-relaxed text-gray-600 font-light">
                    <p>
                        L'espai actual sorgeix de la transformació de l'antic HD Riudebitlles, un projecte que durant més de quinze anys va combinar allotjament i art contemporani al centre històric de Sant Pere de Riudebitlles.
                    </p>
                    <p>
                        Situat en un entorn marcat per la tradició paperera i el paisatge vitivinícola del Penedès, l'espai manté un fort vincule amb els antics molins paperers del riu Riudebitlles.
                    </p>
                    <p>
                        Avui es redefineix com a estudi i centre de producció artística, un lloc de treball i reflexió on la memòria industrial, els grafits i el territori continuen essent font d'inspiració.
                    </p>
                </div>
            </section>

            {/* Main Espai Gallery */}
            <section className="flex flex-col gap-8 w-full">
                <GalleryGrid images={espaiImages} />
            </section>

            {/* Historical Habitacio Gallery */}
            <section className="flex flex-col gap-8 w-full border-t border-gray-100 pt-16">
                <div className="max-w-3xl text-left w-full mx-auto md:mx-0">
                    <h2 className="text-2xl font-light text-gray-500 tracking-wide uppercase">
                        Antigues habitacions de l'HD Riudebitlles
                    </h2>
                </div>
                <GalleryGrid images={habitacioImages} />
            </section>
        </div>
    );
}
