"use client";
import ThalaForm from "@/components/ThalaForm/ThalaForm";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0JNC4ZYJC6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0JNC4ZYJC6');
        `}
      </Script>

        <ThalaForm></ThalaForm>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
    </div>
  );
}
