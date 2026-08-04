import Script from "next/script";

/* Google Analytics (GA4). Stays completely inert until you add your
   Measurement ID. Set NEXT_PUBLIC_GA_ID in .env.local (and in your host's
   environment variables) to "G-XXXXXXXXXX" to switch it on. */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
