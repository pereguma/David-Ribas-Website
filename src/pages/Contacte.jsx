import Seo from '../components/Seo';

export default function Contacte() {
    return (
        <div className="animate-in fade-in duration-700 flex flex-col gap-16 pt-8 max-w-6xl mx-auto w-full">
            <Seo
                title="Contacte — David Ribas"
                description="Contacta amb l'estudi de David Ribas: Carrer de Baix, 29-33, Sant Pere de Riudebitlles (Barcelona). davidribas367@gmail.com."
                path="/contacte"
            />
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black uppercase mb-4">
                    Contacte
                </h1>
                <p className="text-gray-500 font-light tracking-widest uppercase">Posa't en contacte amb l'estudi</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                {/* Contact Information & Form */}
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6 font-light text-lg text-gray-700">
                        <div>
                            <p className="font-medium text-black uppercase tracking-wider text-sm mb-1">Email</p>
                            <a href="mailto:davidribas367@gmail.com" className="hover:text-black transition-colors">davidribas367@gmail.com</a>
                        </div>
                        <div>
                            <p className="font-medium text-black uppercase tracking-wider text-sm mb-1">Telèfon</p>
                            <p>+34 600 531 116</p>
                        </div>
                        <div>
                            <p className="font-medium text-black uppercase tracking-wider text-sm mb-1">Adreça</p>
                            <p>Carrer de Baix, 29-33</p>
                            <p>08776 Sant Pere de Riudebitlles</p>
                            <p>Barcelona</p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nom" className="font-medium text-black uppercase tracking-wider text-sm">Nom</label>
                            <input
                                type="text"
                                id="nom"
                                className="border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors font-light"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium text-black uppercase tracking-wider text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors font-light"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="missatge" className="font-medium text-black uppercase tracking-wider text-sm">Missatge</label>
                            <textarea
                                id="missatge"
                                rows="4"
                                className="border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-black transition-colors font-light resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors w-full md:w-auto self-start"
                        >
                            Enviar missatge
                        </button>
                    </form>
                </div>

                {/* Map */}
                <div className="w-full h-[400px] lg:h-full min-h-[400px] bg-gray-50 flex items-center justify-center p-2 border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.8080614486244!2d1.7011985999999998!3d41.4538965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4666cf3005a39%3A0xc6cb5eb7f74ea71b!2sCarrer%20de%20Baix%2C%2029-33%2C%2008776%20Sant%20Pere%20de%20Riudebitlles%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1700000000000!5m2!1sen!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Location - HD Riudebitlles"
                        className="filter grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
