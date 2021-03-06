import "../styles/globals.css"
// import "../styles/style.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}");
        `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
