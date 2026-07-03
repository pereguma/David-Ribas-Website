import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
    return (
        <div className="animate-in fade-in duration-700 flex flex-col items-center text-center gap-8 pt-24 pb-24">
            <Seo
                title="Pàgina no trobada — David Ribas"
                description="La pàgina que busques no existeix."
                path="/404"
            />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black uppercase">404</h1>
            <p className="text-xl text-gray-600 font-light">
                La pàgina que busques no existeix.
            </p>
            <Link
                to="/"
                className="mt-4 px-8 py-3 bg-black text-white text-sm tracking-widest uppercase hover:bg-gray-800 transition-colors"
            >
                → Tornar a l'inici
            </Link>
        </div>
    );
}
