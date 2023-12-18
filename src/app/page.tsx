import Image from "next/image";
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
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="3fe0e64c-1fd4-4e02-afb7-5476880638a2"
        />
        <div className="flex mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex-auto mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get notified when we’re launching.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Thala is a former Indian cricketer who captained the national
                team in all formats. He is widely regarded as one of the
                greatest wicket-keeper-batsmen and finishers in cricket history.
                He led India to win the 2007 T20 World Cup, the 2011 ODI World
                Cup, and the 2013 Champions Trophy
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex-auto relative md:w-96 md:h-96 mx-auto">
            <Image
              src="/images/thala.jpg"
              fill
              className="object-contain"
              alt="illustration"
            />
          </div>
        </div>
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
      </form>
    </div>
  );
}
