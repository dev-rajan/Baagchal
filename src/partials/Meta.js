import Head from "next/head";

const Meta = ({
  DESCRIPTION,
  OG_TYPE,
  OG_TITLE,
  OG_DESCRIPTION,
  OG_URL,
  TWITTER_CARD,
  TWITTER_TITLE,
  TWITTER_DESC,
  TWITTER_URL,
  OG_IMG,
  TWITTER_IMG,
  TITLE
}) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content={DESCRIPTION} />
    <meta property="og:type" content={OG_TYPE} />
    <meta name="og:title" property="og:title" content={OG_TITLE} />
    <meta
      name="og:description"
      property="og:description"
      content={OG_DESCRIPTION}
    />
    <meta property="og:site_name" content={OG_TITLE} />
    <meta property="og:url" content={OG_URL} />
    <meta name="twitter:card" content={TWITTER_CARD} />
    <meta name="twitter:title" content={TWITTER_TITLE} />
    <meta name="twitter:description" content={TWITTER_DESC} />
    <meta name="twitter:site" content={TWITTER_URL} />
    <link rel="icon" type="image/png" href="img" />
    <link rel="apple-touch-icon" href="img" />
    <meta property="og:image" content={OG_IMG} />
    <meta name="twitter:image" content={TWITTER_IMG} />
    <title>{TITLE}</title>
  </Head>
);
export default Meta;
