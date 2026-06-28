import GalleryGrid from '../components/GalleryGrid';

export default function Espai() {
    const espaiImages = [
        { src: '/Espai/Espai1.jpg', alt: 'Espai David Ribas 1' },
        { src: '/Espai/Espai2.jpg', alt: 'Espai David Ribas 2' },
        { src: '/Espai/Espai3.jpg', alt: 'Espai David Ribas 3' },
        { src: '/Espai/Espai4.jpg', alt: 'Espai David Ribas 4' },
        { src: '/Espai/Espai5.jpg', alt: 'Espai David Ribas 8' },
        { src: '/Espai/Espai6.jpg', alt: 'Espai David Ribas 9' },
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
                        La casa-taller del pintor David Ribas és també sala d'exposicions i punt de trobada amb la creació, les rutes del vi i els molins paperers. Del 2010 al 2025 va ser, a més, un hotel de tres habitacions que combinava art i allotjament.
                    </p>
                    <p>
                        En un entorn rural de vinyes i camps, Sant Pere de Riudebitlles és un municipi de tradició industrial paperera des del segle XVIII. La casa es troba en un conjunt de cinc molins paperers, patrimoni industrial de la vila.
                    </p>
                    <p>
                        Situada al nucli històric de la població, sobre la riera que dona el nom al lloc, mira al barri de l'Altra Banda, a la solana.
                    </p>
                </div>
            </section>

            {/* Main Espai Gallery */}
            <section className="flex flex-col gap-8 w-full">
                <GalleryGrid images={espaiImages} />
            </section>
        </div>
    );
}
