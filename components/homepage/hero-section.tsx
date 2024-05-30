"use client";

import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/homepage/ui/container-scroll";

export default function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="flex flex-col justify-center items-center relative mt-12 3xl:mt-24 mb-8 lg:mb-28 2xl:mb-34">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="mb-4 text-center text-[44px] md:text-[68px] xl:text-[86px] font-semibold leading-none bg-gradient-to-t from-indigo-900 via-indigo-950 to-slate-900 dark:from-cyan-100/80 dark:to-white bg-clip-text text-transparent">
                Elevate Your Marketing <br className="hidden md:inline" /> With
                Verthem
              </h1>
              <p className="text-center text-slate-500 dark:text-slate-300/80">
                Craft compelling marketing pages that captivate and convert. Our
                intuitive interface and versatile features{" "}
                <br className="hidden lg:inline" /> ensure that your campaigns
                are not only visually appealing but also highly effective,
                helping you achieve your marketing goals with ease!
              </p>

              <div className="flex justify-center pt-6 mb-8">
                <a
                  href="#"
                  className="mx-2 verthem-btn flex items-center whitespace-nowrap rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 "
                >
                  Start building for free
                </a>
                <a
                  href="#"
                  className="mx-2 verthem-btn-outline flex items-center whitespace-nowrap rounded-[8px] border-2 border-[#00CAF8] text-[#00CAF8] px-5 py-2 font-medium hover:bg-gradient-to-r from-cyan-100 to-verthem-100 dark:from-cyan-50/5 dark:to-verthem-900/5 hover:underline underline-offset-4"
                >
                  See demo
                </a>
              </div>
            </>
          }
        >
          <Image
            src="/images/homepage/vt-hero.svg"
            alt=""
            width={1068.8}
            height={640}
            style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="rounded-lg lg:rounded-3xl object-cover h-full object-left-top"
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
