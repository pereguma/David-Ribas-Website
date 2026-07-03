import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Home() {
    return (
        <div className="animate-in fade-in duration-700 flex flex-col gap-24">
            <Seo
                title="David Ribas — Pintor i creador visual"
                description="David Ribas (Barcelona, 1957), pintor i creador visual contemporani. Obra, exposicions, publicacions i casa-taller a Sant Pere de Riudebitlles."
                path="/"
            />
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center gap-8 pt-8">
                <div className="w-full max-w-4xl aspect-[16/9] overflow-hidden bg-gray-50 flex items-center justify-center">
                    <img
                        src="/Artista/Artista1.jpg"
                        alt="David Ribas, pintor i creador visual"
                        fetchPriority="high"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase">
                        David Ribas
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light">
                        Pintor i creador visual contemporani.
                    </p>
                </div>
                <Link
                    to="/treball"
                    className="mt-4 px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
                >
                    → Veure treball
                </Link>
            </section>

            {/* Biography Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="flex flex-col gap-6 text-gray-700 leading-relaxed font-light text-lg">
                    <p>
                        David Ribas (Barcelona, 1957) va estudiar pintura i revestiments murals.
                    </p>
                    <p>
                        Des del 1980 es dedica a la pintura, feina que ha compaginat amb la docència, l'activisme cultural i, del 2010 al 2025, la gestió d'HD Riudebitlles, un petit hotel de tres habitacions i centre dinamitzador de l'art contemporani.
                    </p>
                    <p>
                        Pel seu treball artístic ha fet estades de treball al Marroc, Mallorca, Japó i Sardenya, que ha compaginat amb la investigació artística al seu estudi riudebitllenc.
                    </p>
                    <p>
                        Ha fet exposicions individuals a Tokyo, les Franqueses, l'Alzina, Sant Sadurní d'Anoia, l'Alguer (Sardenya), Tremp, Barcelona, Girona, Tànger, Tetuan, Mallorca, Vilafranca del Penedès, Capellades i Saint Paul de Vence (França) i col·lectives a Barcelona, Berlin, Béziers, Nîmes, Toulouse, Lisboa, Rabat, Tetuan, Tànger, Brussel·les i Estrasburg, entre d'altres.
                    </p>
                    <p>
                        És membre fundador del col·lectiu d'artistes plàstics Ras El-Hanut (1994) i del col·lectiu Riudebitlles Territori d'Art (2015).
                    </p>
                    <p>
                        Des de la seva casa-taller a Riudebitlles contribueix al desplegament de l'activitat artística i cultural al municipi i el seu entorn.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="/Artista/Artista2.jpg" alt="Retrat de David Ribas, 1" loading="lazy" className="w-full aspect-square object-cover" />
                    <img src="/Artista/Artista3.webp" alt="Retrat de David Ribas, 2" loading="lazy" className="w-full aspect-square object-cover" />
                    <img src="/Artista/Artista4.jpeg" alt="Retrat de David Ribas, 3" loading="lazy" className="w-full aspect-square object-cover" />
                    <img src="/Artista/Artista5.jpg" alt="Retrat de David Ribas, 4" loading="lazy" className="w-full aspect-square object-cover" />
                </div>
            </section>

            {/* Video Section */}
            <section className="w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
                <h2 className="text-2xl font-semibold tracking-wider text-black w-full text-center">Artemisia</h2>
                <div className="w-full aspect-video bg-gray-50 flex items-center justify-center">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/1MC63H0Da-Q"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Curriculum */}
            <section className="max-w-3xl mx-auto w-full flex flex-col gap-8 text-sm leading-loose text-gray-700 mt-12 mb-24 font-light">
                <div className="border-b border-gray-200 pb-8 text-center">
                    <h2 className="text-xl font-medium tracking-widest text-black mb-2 uppercase">David Ribas Boldú</h2>
                    <p>Barcelona, 1957. Estudis de pintura i revestiments murals.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-black uppercase tracking-wider mb-2">Últimes exposicions</h3>

                    <ul className="flex flex-col gap-2">
                        <li><strong>2026</strong> – "Els grafits als molins paperers". Museu Molí Paperer. Capellades (Barcelona)</li>
                        <li><strong>2023</strong> – "kilometrezero". Molí de cal Xerta. Riudebitlles (Barcelona)</li>
                        <li><strong>2021</strong> – "Pintura i grafit". Galeria Artèria. Igualada (Barcelona)</li>
                        <li><strong>2020</strong> – "Sempre pot passar de tot". Galeria Artemisia. Les Franqueses del Vallès (Barcelona)</li>
                        <li><strong>2020</strong> – "Pintura i paper". Centre Cultural Església Vella. Mont-roig del Camp (Tarragona)</li>
                        <li><strong>2019</strong> – Pintures. Cava Jaume Giró i Giró. Sant Sadurní d'Anoia (Barcelona)</li>
                        <li><strong>2019</strong> – "L'art és una venjança". Grafits i graffiti. Biblioteca Ramon Bosch de Noya Centre Cultural. Sant Sadurní d'Anoia (Barcelona)</li>
                        <li><strong>2018</strong> – "L'art és una venjança. Grafits 1894-1960. Graffiti 2010-2018". Museu Molí Paperer. Capellades (Barcelona)</li>
                        <li><strong>2017</strong> – Quiosc Gallery. Tremp (Lleida)</li>
                        <li><strong>2016</strong> – "Els vermells del negre". Castell del Remei. Penelles (Lleida)</li>
                        <li><strong>2015</strong> – "Busca't la vida, artista!" HD Riudebitlles. Sant Pere de Riudebitlles (Barcelona)</li>
                        <li><strong>2015</strong> – "Passanti" ("Transeunts). Pintura sobre paper. Cult Gallery. L'Alguer (Sardenya, Itàlia)</li>
                        <li><strong>2013</strong> – "Els vermells del negre". Pintura i vi. HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2012</strong> – "Grafits". HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2011</strong> – "Tokyo-Osaka-Riudebitlles. Apunts". HD Riudebitlles. Riudebitlles (Barcelona)</li>
                        <li><strong>2011</strong> – "Riudebitlles". Galeria Brocken. Tòquio (Japó)</li>
                        <li><strong>2011</strong> – "Apunts". L'Alzina de Ribelles (Lleida)</li>
                        <li><strong>2011</strong> – Galeria Paqui Delgado. Sant Sadurní d'Anoia</li>
                        <li><strong>2008</strong> – "Cap novetat de Reykjavíc?" Arthouse. L'Alguer (Sardenya, Itàlia)</li>
                        <li><strong>2007</strong> – Art Bruc. El Bruc (Barcelona)</li>
                        <li><strong>2007</strong> – Sala Portal del Pardo. El Vendrell (Tarragona)</li>
                        <li><strong>2006</strong> – Galeria Contrast. Barcelona</li>
                        <li><strong>2006</strong> – Fundació Josep Niebla. Casavells (Girona)</li>
                        <li><strong>2006</strong> – "Volubilis". Fòrum Berger Balaguer. Vilafranca del Penedès</li>
                        <li><strong>2005</strong> – Museu-Molí Paperer. Capellades</li>
                        <li><strong>2004</strong> – "Pensión Tetuán". Quiosc gallery. Tremp (Lleida)</li>
                        <li><strong>2003</strong> – Institut Cervantes. Tetuan i Tànger (Marroc)</li>
                        <li><strong>2002</strong> – Principal Sombrerers. Barcelona</li>
                        <li><strong>2002</strong> – "Nans". Quiosc gallery. Tremp (Lleida)</li>
                        <li><strong>2002</strong> – Morandi Art Gallery. Girona</li>
                        <li><strong>2001</strong> – Benissalem. Mallorca</li>
                        <li><strong>2001</strong> – Can Festís. Riudebitlles (Barcelone)</li>
                        <li><strong>2001</strong> – Château de Linardié, Sénouillac i Hôtel de Ferriol, Cintegabelle (França)</li>
                        <li><strong>2001</strong> – Musée de Saint Paul. Saint Paul de Vence (França)</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-medium text-black uppercase tracking-wider mb-2">Mostres col·lectives</h3>

                    <ul className="flex flex-col gap-2">
                        <li><strong>2026</strong> – "Perspectives". Molí de cal Xerta. Riudebitlles (Barcelona)</li>
                        <li><strong>2025</strong> – "El vi fa sang". Molí de cal Xerta. Riudebitlles (Barcelona)</li>
                        <li><strong>2025</strong> – "El vi fa sang". Galeria Paqui Delgado. Sant Sadurní d'Anoia (Barcelona)</li>
                        <li><strong>2025</strong> – Homenatge al mestre Tsubota. Osaka (Japó)</li>
                        <li><strong>2023</strong> – Errant. Itineraris d'art i pensament. El Cogul (Lleida)</li>
                        <li><strong>2022</strong> – "Horitzons". Galeria Artemisia. Les Franqueses del Vallès (Barcelona)</li>
                        <li><strong>2021</strong> – 33è i últim Firart Penedès. Vilafranca del Penedès</li>
                        <li><strong>2020</strong> – "Clucart (2013-2017). En record d'Alba Vilamajó". Museu Comarcal d'Urgell. Tàrrega (Lleida).</li>
                        <li><strong>2020</strong> – Art al carrer. Sant Pere de Riudebitlles</li>
                        <li><strong>2019</strong> – "Una nit a Tunísia, a la manera de..." Innocents 2019. HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2019</strong> – Glop d'art. Mediona-Riudebitlles</li>
                        <li><strong>2018</strong> – HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2017</strong> – "Cultura més que mai". Innocents 2017. HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2017</strong> – "In vino veritas". Col·lectiu Ardhara. Centre d'Art Contemporani La Sala. Vilanova i la Geltrú (Barcelona)</li>
                        <li><strong>2017</strong> – "Out of time". Albareh Art Gallery. Bahrain</li>
                        <li><strong>2017</strong> – "Bee my muse". L'art et l'abeille. Ferme d'Icart. Montels (Arieja, França)</li>
                        <li><strong>2016-2017</strong> – "Postals del Riudebitlles". HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2016</strong> – Apartament 33. Calafell (Tarragona)</li>
                        <li><strong>2016</strong> – "Riudebitlles Territori d'Art". Cava Jaume Giró i Giró. Sant Sadurní d'Anoia</li>
                        <li><strong>2016</strong> – "25 + 2 Palmadotze. Art, vi i paisatge". Vinseum. Vilafranca del Penedès.</li>
                        <li><strong>2016</strong> – "Pedra". Glop d'art. Sant Joan de Mediona (Barcelona)</li>
                        <li><strong>2016</strong> – "Terra nullius". Col·lectiu Ras El-Hanut. Sala del Portal del Pardo. El Vendrell (Tarragona)</li>
                        <li><strong>2015</strong> – "Els colors del vi". Col·lectiu Ardhara. El Vendrell (Tarragona)</li>
                        <li><strong>2015</strong> – "Pedra". Glop d'art. Riudebitlles i Mediona</li>
                        <li><strong>2015</strong> – "Aparador de creadors". Obra de petit format. Galeria Tangram. Barcelona</li>
                        <li><strong>2015</strong> – "Terra nullius". Col·lectiu Ras El-Hanut. Capella de Sant Joan. Vilafranca del Penedès</li>
                        <li><strong>2015</strong> – "Grafits". Embarrat. Tàrrega.</li>
                        <li><strong>2014</strong> – "No és broma!" HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2014</strong> – Ardhara. Barri Vell. Sant Pere de Riudebitlles</li>
                        <li><strong>2014</strong> – "25 Palmadotze. Art, vi i paisatge". Galeria Palmadotze. Santa Margarida i els Monjos (Barcelona)</li>
                        <li><strong>2014</strong> – "Café des Voyageurs". Museo de las Murallas Reales. Ceuta (Marroc)</li>
                        <li><strong>2014</strong> – Instituto Cervantes. Tetuan i Tanger (Marroc)</li>
                        <li><strong>2014</strong> – "Cridats per Vinyoli". Exposició sobre poemes de Joan Vinyoli. Santa Coloma de Farners, Barcelona, Begur i Vilafranca del Penedès</li>
                        <li><strong>2013</strong> – Glop d'art. Intervenció en un safareig. Sant Pere de Riudebitlles</li>
                        <li><strong>2013</strong> – "Identitats postisses". Exposició sobre poemes de R. Bonàs. Tortosa (Tarragona)</li>
                        <li><strong>2013</strong> – "Larriera". Sant Pere de Riudebitlles</li>
                        <li><strong>2012</strong> – Ardhara. Exposició itinerant d'artistes del Penedès i el Garraf</li>
                        <li><strong>2012</strong> – 1ª Biennal Internacional de Casablanca. Casablanca (Marroc)</li>
                        <li><strong>2012</strong> – "Made in Japan". HD Riudebitlles. Sant Pere de Riudebitlles (Barcelona)</li>
                        <li><strong>2012</strong> – "Café des Voyageurs. Ifitry 2011". Col·legi d'Arquitectes de Catalunya. Barcelona</li>
                        <li><strong>2012</strong> – Ras El-Hanut. Ifitry 2011. Riad Denise Masson. Institut Francès. Marràqueix (Marroc)</li>
                        <li><strong>2011</strong> – "Café des Voyageurs. Ifitry 2011". HD Riudebitlles. Sant Pere de Riudebitlles</li>
                        <li><strong>2008</strong> – Berliner Liste Fair Art. House Cumberland. Berlín (Alemanya)</li>
                        <li><strong>2008</strong> – "Homenatge a Medi Ben Barka". Rabat (Marroc)</li>
                        <li><strong>2008</strong> – "Montserrat". ArtBruc. El Bruc (Barcelona)</li>
                        <li><strong>2007</strong> – ArtBruc. El Bruc (Barcelona)</li>
                        <li><strong>2006</strong> – "Ras El-Hanut". Hôtel du Département. Béziers (França)</li>
                        <li><strong>2006</strong> – ARTéNîm 2006. Nit de l'Art. Nîmes (França)</li>
                        <li><strong>2005</strong> – Biennal Riudebitlles. Museu-Molí paperer. Capellades</li>
                        <li><strong>2002</strong> – 1 Saló Internacional d'Artistes Contemporanis (SIAC). Oeiras. Lisboa</li>
                        <li><strong>2001</strong> – Morandi Art Gallery. Girona</li>
                        <li><strong>2001</strong> – "Del Penedès". Artistes de col·lecció. Galeria Sicart. Vilafranca del Penedès</li>
                        <li><strong>2000</strong> – "Six au Sud". Galeria Astrium. Toulouse (França)</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                    <h3 className="text-lg font-medium text-black uppercase tracking-wider mb-2">Accions</h3>
                    <ul className="flex flex-col gap-2">
                        <li><strong>2006-2008</strong> – "Lectura d'Omar Khayyam". Grafits<br />
                            Celler Pardas. Torrelavit (2006)<br />
                            Vinseum. Museu de les Cultures del Vi. Vilafranca del Penedès (2007)<br />
                            Centre L'Escocesa. Barcelona (2008)
                        </li>
                        <li><strong>2015</strong> – "Grafiti". Embarrat. Tàrrega</li>
                        <li><strong>2015</strong> – "Transeünts". Treballs sobre paper i grafits sobre fotografia i pedres. Cult Gallery. L'Alguer (Sardenya)</li>
                        <li><strong>2019</strong> – Acció artística "Omar Khayyam i les quartetes del vi, el beure i el viure". Nit de la pansa blanca. Alella</li>
                        <li><strong>2021</strong> – Empaperament del molí paperer de cal Xerta. Sant Pere de Riudebitlles</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 mt-8 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-medium text-black uppercase tracking-wider mb-2">Publicacions</h3>
                    <ul className="flex flex-col gap-2 mb-8">
                        <li><strong>2025</strong> – <em>Els grafits dels molins paperers</em>. Coedició d'Eumo Editorial, Museu de la Ciència i de la Tècnica de Catalunya i Museu Molí Paperer de Capellades. Col·lecció "La Fàbrica", núm. 3.</li>
                    </ul>

                    <div className="text-center opacity-80 pt-8 border-t border-gray-100">
                        <p className="font-medium text-black">David Ribas</p>
                        <p>Carrer de Baix, 29-33</p>
                        <p>08776 Riudebitlles</p>
                        <p>davidribas367@gmail.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
