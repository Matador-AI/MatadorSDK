export default {
  github: 'https://github.com/Matador-AI/MatadorSDK',
  //docsRepositoryBase: "https://github.com/Matador-AI/MatadorSDK",
  titleSuffix: ' – Matador SDK',
  logo: (
    <>
      <img src="https://uploads-ssl.webflow.com/604a92a57d10a08b57c386d0/604a92a57d10a042cdc386ed_header-logo-dark.svg" height="50px" />
  
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      {/* <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" /> */}
      {/* <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" /> */}
      {/* <meta name="apple-mobile-web-app-title" content="Nextra" /> */}
      <link
        rel="apple-touch-icon"
        href="/icon.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  //footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © <a href="https://matador.ai" target={"_blank"}>Matador.ai.</a></>,
  unstable_faviconGlyph: '📦',
}
