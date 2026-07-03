import { useState } from 'react';
import GalleryGrid from '../components/GalleryGrid';
import Seo from '../components/Seo';

export default function Obres() {
    const [activeTab, setActiveTab] = useState('pintura');

    const categories = {
        pintura: [
            { src: '/Obres/Pintura/Pintura1.jpg', alt: 'Pintura de David Ribas, 1' },
            { src: '/Obres/Pintura/Pintura2.JPG', alt: 'Pintura de David Ribas, 2' },
            { src: '/Obres/Pintura/Pintura3.JPG', alt: 'Pintura de David Ribas, 3' },
            { src: '/Obres/Pintura/Pintura4.jpeg', alt: 'Pintura de David Ribas, 4' },
            { src: '/Obres/Pintura/Pintura5.jpeg', alt: 'Pintura de David Ribas, 5' },
            { src: '/Obres/Pintura/Pintura6.jpeg', alt: 'Pintura de David Ribas, 6' },
            { src: '/Obres/Pintura/Pintura7.jpeg', alt: 'Pintura de David Ribas, 7' },
            { src: '/Obres/Pintura/Pintura8.jpeg', alt: 'Pintura de David Ribas, 8' },
            { src: '/Obres/Pintura/Pintura9.jpeg', alt: 'Pintura de David Ribas, 9' },
            { src: '/Obres/Pintura/Pintura10.jpeg', alt: 'Pintura de David Ribas, 10' },
            { src: '/Obres/Pintura/Pintura11.jpeg', alt: 'Pintura de David Ribas, 11' },
            { src: '/Obres/Pintura/Pintura12.jpeg', alt: 'Pintura de David Ribas, 12' },
            { src: '/Obres/Pintura/Pintura13.jpeg', alt: 'Pintura de David Ribas, 13' },
        ],
        grafit: [
            { src: '/Obres/Grafit/Grafit1.JPG', alt: 'Grafit de David Ribas, 1' },
            { src: '/Obres/Grafit/Grafit2.jpg', alt: 'Grafit de David Ribas, 2' },
            { src: '/Obres/Grafit/Grafit3.jpg', alt: 'Grafit de David Ribas, 3' },
        ],
        fotografia: [
            { src: '/Obres/Fotografia/Fotografia 1.png', alt: 'Fotografia de David Ribas, 1' },
            { src: '/Obres/Fotografia/Fotografia 2.png', alt: 'Fotografia de David Ribas, 2' },
            { src: '/Obres/Fotografia/Fotografia 3.png', alt: 'Fotografia de David Ribas, 3' },
            { src: '/Obres/Fotografia/Fotografia 4.png', alt: 'Fotografia de David Ribas, 4' },
        ]
    };

    const tabs = [
        { id: 'pintura', label: 'Pintura' },
        { id: 'grafit', label: 'Grafit' },
        { id: 'fotografia', label: 'Fotografia' },
    ];

    return (
        <div className="animate-in fade-in duration-700 flex flex-col gap-16 pt-8">
            <Seo
                title="Treball — David Ribas"
                description="Obra de David Ribas: pintura, grafit i fotografia. Formes i referències en l'espai, depurades i sintetitzades constantment."
                path="/treball"
            />
            <section className="max-w-3xl mx-auto text-center flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                    Treball
                </h1>
                <p className="text-xl leading-relaxed text-gray-600 font-light">
                    El meu treball, de manera conscient i racional, és un neguit, un trànsit volgudament nòmada i a la deriva. Busco, depurant i sintetitzant constantment, formes i referències en l'espai. Com un joc. Ja sigui en dibuix, en pintura o en un text a la manera de grafit.
                </p>
            </section>

            {/* Category Navigation */}
            <nav className="flex flex-wrap justify-center gap-8 border-b border-gray-200 pb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-lg md:text-xl tracking-wider uppercase transition-colors pb-1 ${activeTab === tab.id
                                ? 'text-black border-b-2 border-black font-medium'
                                : 'text-gray-400 hover:text-black font-light'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            {/* Active Gallery */}
            <div className="w-full min-h-[50vh]">
                <GalleryGrid images={categories[activeTab]} />
            </div>
        </div>
    );
}
