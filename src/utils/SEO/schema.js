export const schemaBuilder = (type, url, name) => {
    let extensionToBase = {};
    if (type === 'Article') {
        extensionToBase = {
            "name": `${name}`,
        }
    }
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": `${type}`,
        "url": `${url}`,
        "publisher": {
            "@type": "Organization",
            "name": "Centre Multisport Rosemere",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dakcoffeeroasters.com/FaviconDak.png",
                "width": 131,
                "height": 131
            }
        },
    }
    return {
        ...baseSchema,
        ...extensionToBase
    } 
};