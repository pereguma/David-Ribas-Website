import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full sticky top-0 bg-white/90 backdrop-blur z-50 py-6">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Link to="/" className="text-2xl font-semibold tracking-widest text-black">
                        DAVID RIBAS
                    </Link>
                    <nav className="flex gap-6 text-sm uppercase tracking-wider text-gray-600">
                        <Link to="/" className="hover:text-black transition-colors">Inici</Link>
                        <Link to="/espai" className="hover:text-black transition-colors">L'Espai</Link>
                        <Link to="/treball" className="hover:text-black transition-colors">Treball</Link>
                        <Link to="/publicacions" className="hover:text-black transition-colors">Publicacions</Link>
                        <Link to="/contacte" className="hover:text-black transition-colors">Contacte</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12">
                <Outlet />
            </main>

            <footer className="w-full py-12 text-center text-sm text-gray-500 border-t border-gray-100 flex flex-col gap-2">
                <div className="flex justify-center gap-6 mb-4">
                    <a href="https://instagram.com/hdriudebitlles" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Instagram</a>
                    <a href="https://www.facebook.com/david.ribasboldu" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Facebook</a>
                </div>
                <p>© {new Date().getFullYear()} David Ribas</p>
            </footer>
        </div>
    );
}
