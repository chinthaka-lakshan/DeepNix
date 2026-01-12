import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    url?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = 'DEEPNIX - Premium IT Solutions & Development Services',
    description = 'DEEPNIX offers cutting-edge IT solutions including UI/UX design, web development, and digital marketing services. Transform your business with our expert team.',
    name = 'DEEPNIX',
    type = 'website',
    url = 'https://deepnix.com', // Replace with actual domain when live
    image = '/Deppnix1.png'
}) => {

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": url,
        "logo": `${url}${image}`,
        "sameAs": [
            "https://facebook.com/deepnix",
            "https://youtube.com/deepnix",
            "https://tiktok.com/@deepnix"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+94-71-055-1392",
            "contactType": "customer service",
            "areaServed": "Global"
        },
        "description": description
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={url} />

            {/* Facebook Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={name} />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
