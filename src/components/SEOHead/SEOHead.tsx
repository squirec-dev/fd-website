import Head from "next/head";

const SEOHead = (): React.ReactElement => (
    <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Claire Squire" />
        <meta name="description" content="Software engineer portfolio by Claire Squire, specialising in frontend technology including developing design systems, ES6, JavaScript, ReactJS, NextJS and AWS" />
        <meta name="keywords" content="aws, css, es6, frontend, html, javascript, js, next, node, postcss, react, sass, software engineer" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* TODO: <link rel="canonical" href="http://localhost:3000/" /> */}
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#63c1e0" />
        <meta name="msapplication-TileColor" content="#63c1e0" />
        <meta name="theme-color" content="#ffffff" />

        <title>Fluid Designs | Claire Squire</title>
    </Head>
);

export default SEOHead;