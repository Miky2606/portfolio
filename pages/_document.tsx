import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Jonathan Garcia Portfolio" />
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="touch-icon-iphone-retina.png"
        />
        <link rel="icon" href="/imgs/icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="touch-icon-ipad-retina.png"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
