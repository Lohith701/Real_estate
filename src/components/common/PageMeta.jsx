import { useEffect } from 'react';

/**
 * PageMeta — sets <title> and <meta description> for each page.
 * Works without any external library by directly mutating the DOM.
 */
const PageMeta = ({ title, description, keywords }) => {
    useEffect(() => {
        // Set title
        document.title = title ? `${title} | BlueCraft Properties` : 'BlueCraft Properties — Premium Real Estate in Bengaluru';

        // Set or create meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description || 'BlueCraft Properties offers premium real estate listings in Bengaluru including plots, flats, villas, and commercial spaces with zero brokerage.';

        // Set or create meta keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.name = 'keywords';
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.content = keywords;
        }

        // OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = title || 'BlueCraft Properties';
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.content = description || 'Premium real estate in Bengaluru';
    }, [title, description, keywords]);

    return null;
};

export default PageMeta;
