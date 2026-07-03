import { useEffect } from 'react';

// Canviar quan hi hagi domini propi (també a public/robots.txt i public/sitemap.xml)
export const BASE_URL = 'https://david-ribas-website.vercel.app';

function setMeta(selector, attr, value) {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
}

export default function Seo({ title, description, path }) {
    useEffect(() => {
        document.title = title;
        const url = `${BASE_URL}${path}`;
        setMeta('meta[name="description"]', 'content', description);
        setMeta('link[rel="canonical"]', 'href', url);
        setMeta('meta[property="og:title"]', 'content', title);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[name="twitter:title"]', 'content', title);
        setMeta('meta[name="twitter:description"]', 'content', description);
    }, [title, description, path]);

    return null;
}
