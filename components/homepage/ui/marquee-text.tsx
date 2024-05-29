import React from "react";
import { Krona_One } from "next/font/google";
import Marquee from "react-fast-marquee";

const kronaOne = Krona_One({ weight: "400", subsets: ["latin"] });

export default function MarqueeText() {
  return (
    <section>
      <div className="mb-44">
        <Marquee pauseOnHover loop={0} speed={110}>
          <div className="marquee-inner stroke stroke-1 stroke-current font-extrabold text-primary-color dark:text-white">
            <span
              className={`${kronaOne.className} text-[10vw] px-[2vw] uppercase leading-normal`}
            >
              Craft compelling marketing pages that captivate and convert
            </span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
