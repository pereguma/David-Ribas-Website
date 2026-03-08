import GalleryGrid from '../components/GalleryGrid';

export default function Publicacions() {
    const publicacionsImages = [
        { src: '/Publicacions/Molins paperers Imatge.png', alt: 'Els grafits dels molins paperers' }
    ];

    return (
        <div className="animate-in fade-in duration-700 flex flex-col gap-16 pt-8 max-w-4xl mx-auto">
            <section className="flex flex-col gap-8">
                <div className="text-center flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black uppercase">
                        Els grafits dels molins paperers
                    </h1>
                    <h2 className="text-xl md:text-2xl font-light text-gray-600">
                        Publicació del llibre <em>Els grafits dels molins paperers</em>, de David Ribas (amb pròleg de Joan Maria Minguet)
                    </h2>
                </div>

                <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-700 font-light mt-8 px-4">
                    <p>
                        L'obra, editada per EUMO Editorial, el Museu Nacional de la Ciència i la Tècnica de Catalunya (mNACTEC) i el Museu Molí Paperer de Capellades, constitueix el tercer volum de la col·lecció «La Fàbrica». Aquesta col·lecció té l'objectiu de recuperar i posar en valor el patrimoni industrial relacionat amb la producció del paper.
                    </p>
                    <p>
                        David Ribas ha dut a terme durant molts anys un exhaustiu treball de camp, recorrent desenes d'antics molins paperers de les conques dels rius Anoia i Riudebitlles. Ha accedit als miradors —els espais característics de les plantes superiors on s'estenia i s'assecava el paper— per documentar i fotografiar centenars de grafits conservats a les parets.
                    </p>
                    <p>
                        Aquests miradors s'identifiquen fàcilment des de l'exterior gràcies a les nombroses ventanes (finestres grans) que permetien l'entrada del vent necessari per assecar els fulls, penjats en cordes. Precisament en aquests espais interiors, entre tasca i tasca, els treballadors dels molins van deixar grafits que avui constitueixen un patrimoni documental i humà excepcional.
                    </p>
                    <p>
                        Els grafits inclouen càlculs relacionats amb la producció, dates i efemèrides, anotacions personals, dibuixos i petites composicions que reflecteixen aspectes de la vida quotidiana. La cronologia abasta des de finals del segle XIX fins a èpoques més recents.
                    </p>
                    <p className="pl-6 border-l-2 border-black italic text-gray-600 my-4">
                        «Els grafits són art. Sempre ho han estat. No hi ha cap argument raonable que algú pugui esgrimir per a negar-ho. Una altra cosa és que hi hagi gent que detesti veure grafits pels carrers. Ningú ha dit que l'art hagi de ser bonic ni còmode ni indolent.»<br />
                        — Joan Maria Minguet
                    </p>
                    <p>
                        Aquesta publicació destaca la importància dels grafits com a testimonis vius del treball i la creativitat dels operaris paperers, convertint les parets dels antics molins en un arxiu espontani i únic del patrimoni industrial català.
                    </p>

                    <div className="bg-gray-50 p-6 border border-gray-100 mt-4 text-center">
                        <p className="font-medium text-black uppercase tracking-widest text-sm mb-2">Presentació del llibre</p>
                        <p>Diumenge 14 de desembre a les 12.30 h</p>
                        <p>Museu Molí Paperer de Capellades</p>
                        <p className="text-sm mt-2 text-gray-500">Acte obert al públic</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-8">
                <GalleryGrid images={publicacionsImages} />
            </section>
        </div>
    );
}
