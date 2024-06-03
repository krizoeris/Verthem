"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/homepage/ui/bento-grid";
import { motion } from "framer-motion";
import { scaleInView } from "@/utils/framer-variants";
import { useInViewHook } from "@/hooks/homepage-hooks";

export default function ProductSection() {
  const { ref, inView } = useInViewHook();

  return (
    <section ref={ref} className="product-section">
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="mb-28"
      >
        <div className="mb-14 text-center">
          <motion.span
            variants={scaleInView}
            className="font-krona text-md uppercase text-[#00CAF8]"
          >
            Powerfull Visual Builder
          </motion.span>
          <motion.h2
            variants={scaleInView}
            className="mt-2 text-4xl font-semibold bg-gradient-to-t from-indigo-900 via-indigo-950 to-slate-900 dark:from-cyan-100/80 dark:to-white bg-clip-text text-transparent"
          >
            Create Stunning Campaign Pages With Ease
          </motion.h2>
        </div>
        <motion.div variants={scaleInView}>
          <BentoGrid>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={
                  i === Math.floor(items.length / 2) ? "middle-item" : ""
                }
              />
            ))}
          </BentoGrid>
        </motion.div>
      </motion.div>
    </section>
  );
}

const ProductImgOne = () => {
  return (
    <div className="flex flex-1 justify-center w-full h-full max-h-[12rem] rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-50 overflow-hidden">
      <Image
        src="/images/homepage/vt-learning.svg"
        alt="avatar"
        height={540}
        width={260}
        className="object-cover -mt-2"
        style={{
          width: "auto",
          height: "auto",
          boxShadow: "0px 1.24px 2.48px 0px rgba(0, 0, 0, 0.25)",
        }}
      />
    </div>
  );
};
const ProductImgTwo = () => {
  return (
    <div className="flex flex-1 justify-center w-full h-full min-h-[12rem] rounded-xl bg-cyan-50 overflow-hidden">
      <Image
        src="/images/homepage/vt-creativity.svg"
        alt="avatar"
        height={330}
        width={278}
        className="-mb-10"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "280px",
          boxShadow: "0px 0.35px 0.7px 0px rgba(0, 0, 0, 0.25)",
        }}
      />
    </div>
  );
};
const ProductImgThree = () => {
  return (
    <div className="flex flex-1 justify-center w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-50  overflow-hidden">
      <Image
        src="/images/homepage/vt-integration.svg"
        alt="avatar"
        height={130}
        width={157}
        className=""
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

const items = [
  {
    title: "Enjoyable Learning Curve, Simple Operation",
    description:
      "Building campaign pages shouldn't require a specialized degree. Verthem is designed to be so user-friendly that you might actually find joy in the process.",
    header: <ProductImgOne />,
  },
  {
    title: "Total Creative Liberty",
    description:
      "Verthem empowers you to bring your visions to life. Say goodbye to the struggle of creating campaign pages that truly stand out from your competitors.",
    header: <ProductImgTwo />,
  },
  {
    title: "Seamless Integration with Your Business Tools",
    description:
      "We understand that you rely on a variety of tools for your business. That's why Verthem seamlessly integrates with a plethora of other excellent software solutions. You're fully supported.",
    header: <ProductImgThree />,
  },
];
