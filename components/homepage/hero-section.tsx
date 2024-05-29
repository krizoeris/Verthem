"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <section className="hero-section">
      <div className="flex flex-col justify-center items-center relative mt-16 mb-28 lg:mb-44">
        <div className="pt-32 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            className="mb-4 text-center text-[44px] md:text-[68px] xl:text-[86px] font-semibold leading-none bg-gradient-to-t from-indigo-900 via-indigo-950 to-slate-900 dark:from-white/40 dark:to-white bg-clip-text text-transparent"
          >
            Elevate Your Marketing <br className="hidden md:inline" /> With
            Verthem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.225 }}
            className="text-center text-slate-500 dark:text-slate-300/80"
          >
            Craft compelling marketing pages that captivate and convert. Our
            intuitive interface and versatile features ensure that your
            campaigns are <br className="hidden md:inline" />
            not only visually appealing but also highly effective, helping you
            achieve your marketing goals with ease!
          </motion.p>
          <div className="flex justify-center pt-6">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.245,
                duration: 0.9,
              }}
              href="#"
              className="mx-2 verthem-btn flex items-center whitespace-nowrap rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-4 focus:outline-none"
            >
              Start building for free
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.275,
                duration: 0.7,
              }}
              href="#"
              className="mx-2 verthem-btn-outline flex items-center whitespace-nowrap rounded-[8px] border-2 border-[#00CAF8] text-[#00CAF8] px-5 py-2 font-medium hover:bg-gradient-to-r from-cyan-100 to-verthem-100 hover:underline underline-offset-4"
            >
              See demo
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.325 }}
        >
          <Tilt tiltReverse={true}>
            <img
              src="/images/homepage/vt-hero.svg"
              alt=""
              style={{ boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)" }}
              className="rounded-lg lg:rounded-3xl"
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
