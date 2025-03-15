import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Other meta tags */}
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Tidio Live Chat Script */}
        <script
          async
          src="https://code.tidio.co/YOUR_UNIQUE_TIDIO_CODE.js"
        ></script>
      </body>
    </Html>
  );
}
