import React from "react";

export default function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="flex flex-col justify-center relative mb-44">
        <div className="pt-32 pb-10">
          <h1 className="mb-4 text-center text-[44px] md:text-[68px] xl:text-[86px] font-semibold leading-none bg-gradient-to-t from-indigo-900 via-indigo-950 to-slate-900 dark:from-white/40 dark:to-white bg-clip-text text-transparent">
            Elevate Your Marketing <br className="hidden md:inline" /> With
            Verthem
          </h1>
          <p className="text-center text-slate-500 dark:text-slate-300/80">
            Craft compelling marketing pages that captivate and convert. Our
            intuitive interface and versatile features ensure that your
            campaigns are <br className="hidden md:inline" />
            not only visually appealing but also highly effective, helping you
            achieve your marketing goals with ease!
          </p>
          <div className="flex justify-center pt-6">
            <a
              href="#"
              className="mx-2 verthem-btn flex items-center whitespace-nowrap rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white"
            >
              Start building for free
            </a>
            <a
              href="#"
              className="mx-2 verthem-btn-outline flex items-center whitespace-nowrap rounded-[8px] border-2 border-[#00CAF8] text-[#00CAF8] px-5 py-2 font-medium"
            >
              See demo
            </a>
          </div>
        </div>

        <img src="/images/homepage/vt-hero.svg" alt="" />
      </div>
    </section>
  );
}
