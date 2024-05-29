"use client";

import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeText() {
  return (
    <section>
      <div className="mb-28 lg:mb-44">
        <Marquee pauseOnHover loop={0} speed={110}>
          <div className="marquee-inner stroke stroke-1 stroke-current text-primary-color dark:text-white">
            <span className="font-krona">
              Craft compelling marketing pages that captivate and convert
            </span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
