import GalleryGrid from '../components/GalleryGrid';
import Seo from '../components/Seo';

export default function Publicacions() {
    const portadaImages = [
        { src: '/Publicacions/portada-llibre.jpg', alt: "Portada del llibre 'Els grafits dels molins paperers', amb grafits del Molí Vinyals de Torrelavit" }
    ];

    return (
        <div className="animate-in fade-in duration-700 flex flex-col gap-16 pt-8 max-w-4xl mx-auto">
            <Seo
                title="Els grafits dels molins paperers — David Ribas"
                description="El llibre 'Els grafits dels molins paperers' de David Ribas, amb pròleg de Joan M. Minguet. Coedició d'Eumo Editorial, el mNACTEC i el Museu Molí Paperer de Capellades."
                path="/publicacions"
            />
            <section className="flex flex-col gap-8">
                <div className="text-center flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black uppercase">
                        Els grafits dels molins paperers
                    </h1>
                    <h2 className="text-xl md:text-2xl font-light text-gray-600">
                        de David Ribas<br />
                        Amb pròleg de Joan M. Minguet
                    </h2>
                </div>

                <div className="w-full mt-4">
                    <GalleryGrid images={portadaImages} />
                    <p className="text-center text-sm text-gray-500 font-light mt-4">Molí Vinyals. Torrelavit</p>
                </div>

                <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-700 font-light mt-8 px-4 text-justify">
                    <p>
                        El llibre <em>Els grafits dels molins paperers</em> és fruit d'un extens treball de camp dut a terme al llarg de molts anys. David Ribas ha recorregut <strong className="font-semibold text-black">desenes d'antics molins paperers</strong> de les conques de l'Anoia i del Riudebitlles, accedint als miradors —els espais on s'estenia i s'assecava el paper— per localitzar i fotografiar centenars de grafits conservats a les parets d'aquests edificis.
                    </p>
                    <p>
                        El <strong className="font-semibold text-black">mirador</strong> era un espai molt característic dels antics molins paperers i encara avui permet identificar-los visualment des de l'exterior gràcies a la gran quantitat de <em>ventanes</em>, les finestres que deixaven entrar el vent necessari per assecar el paper. Situat a les plantes altes, aquest espai era ple de cordes on s'estenien els fulls. És en aquests espais on s'hi poden veure, encara avui, una gran quantitat de grafits.
                    </p>
                    <p>
                        Aquests grafits, realitzats per treballadors dels molins entre tasca i tasca, constitueixen un <strong className="font-semibold text-black">patrimoni documental i humà excepcional</strong>. S'hi poden llegir càlculs vinculats a la producció, dates i efemèrides, anotacions personals, dibuixos i petites composicions que revelen la vida quotidiana. Pel que fa a la cronologia, se n'hi poden trobar des de finals del segle XIX fins a èpoques més recents.
                    </p>
                    <p>
                        El llibre compta amb un <strong className="font-semibold text-black">pròleg</strong> de l'historiador de l'art <strong className="font-semibold text-black">Joan Maria Minguet</strong>, que reivindica la naturalesa artística del grafit:
                    </p>
                    <p className="pl-6 border-l-2 border-black italic text-gray-600 my-4">
                        «Els grafits són art. Sempre ho han estat. No hi ha cap argument raonable que algú pugui esgrimir per a negar-ho. Una altra cosa és que hi hagi gent que detesti veure grafits pels carrers. Ningú ha dit que l'art hagi de ser bonic ni còmode ni indolent.»<br />
                        — Joan Maria Minguet
                    </p>
                    <p>
                        <em>Els grafits dels molins paperers</em> és el 3r número de la col·lecció <em>La Fàbrica</em>, una coedició d'EUMO Editorial, el mNACTEC i el Museu Molí Paperer de Capellades, que té per objectiu recuperar i posar en valor el patrimoni industrial del paper.
                    </p>
                </div>
            </section>

        </div>
    );
}
