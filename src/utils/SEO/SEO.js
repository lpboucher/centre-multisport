import React from "react";
import Helmet from "react-helmet";
import { useIntl } from 'react-intl';
import { useSEO } from "../../hooks/use-SEO";

const SEO = ({title, description, image, url, keywords, schema}) => {
    const { locale } = useIntl();
    const { seoKeywords } = useSEO({node_locale: [locale], slug: ['about']});
    const allKeywords = keywords ? [...seoKeywords, ...keywords] : seoKeywords;
    return (
        <Helmet>
            <html lang="en"/>
            {title && <title>{title}</title>}
            {title && <meta name="og:title" content={title}/>}
            {title && <meta name="twitter:title" content={title}/>}
            {description && <meta name="description" content={description}/>}
            {description && <meta name="og:description" content={description}/>}
            {description && <meta name="twitter:description" content={description}/>}
            {image && <meta property="og:image" content={image} />}
            {image && <meta name="twitter:card" content={image}></meta>}
            {url && <meta property="og:url" content={url} />}
            <meta name="keywords" content={allKeywords.join(",")}/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#000000"/>
            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
};

export default SEO;