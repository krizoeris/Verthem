"use client";

import React from "react";
import Image from "next/image";
import { Krona_One } from "next/font/google";
import { motion } from "framer-motion";
import { scaleInView } from "@/utils/framer-variants";
import { useInViewHook } from "@/hooks/homepage-hooks";

const kronaOne = Krona_One({ weight: "400", subsets: ["latin"] });

export interface FeatureItemProps {
  item: {
    subtitle: string;
    title: string;
    description: string;
    header: React.ReactNode;
  };
}

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {items.map((item, i) => (
        <FeatureItem key={i} item={item} />
      ))}
    </section>
  );
}

const FeatureItem = ({ item }: FeatureItemProps) => {
  const { ref, inView } = useInViewHook();

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 mb-16 even:grid-cols-reverse"
    >
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="flex flex-col justify-center"
      >
        <motion.span
          variants={scaleInView}
          className={`${kronaOne.className} text-md uppercase text-[#00CAF8] mb-6`}
        >
          {item.subtitle}
        </motion.span>
        <motion.h2
          variants={scaleInView}
          className="text-3xl font-semibold mb-2"
        >
          {item.title}
        </motion.h2>
        <motion.p variants={scaleInView} className="mb-10">
          {item.description}
        </motion.p>
        <motion.a
          variants={scaleInView}
          href="/signup"
          className="verthem-btn w-fit rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white"
        >
          Start building for free
        </motion.a>
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={scaleInView}
        className="inline-flex items-center justify-center p-0.5 mb-0 text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-verthem-900 via-transparent to-verthem-900 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
      >
        {item.header}
      </motion.div>
    </div>
  );
};

const FeatureImgOne = () => {
  const featImgV1 = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const featImgV2 = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 justify-center w-full h-full max-h-[440px] rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-50 overflow-hidden"
    >
      <motion.div variants={featImgV1} className="mt-8 -mb-24 -mr-24">
        <Image
          src="/images/homepage/feat-1-alignment.svg"
          alt="avatar"
          height="534"
          width="400"
        />
      </motion.div>
      <motion.div variants={featImgV2} className="mt-16 -mr-16">
        <Image
          src="/images/homepage/feat-1-color.svg"
          alt="avatar"
          height="330"
          width="360"
        />
      </motion.div>
    </motion.div>
  );
};
const FeatureImgTwo = () => {
  const featImgV1 = {
    initial: {
      x: 0,
      scale: 1.1,
    },
    animate: {
      y: 10,
      rotate: -3,
      scale: 1.2,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 justify-center w-full h-full min-h-[440px] rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-200 overflow-hidden"
    >
      <motion.div variants={featImgV1} className="mt-14">
        <Image
          src="/images/homepage/feat-2-cols.svg"
          alt="avatar"
          height="480"
          width="680"
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    subtitle: "Reusable Components",
    title: "Build Fast With Pre-defined Component Libraries With Ease",
    description:
      "Effortlessly craft your campaigns or landing pages with our reusable components that can be easily reused across numerous projects.",
    header: <FeatureImgOne />,
  },
  {
    subtitle: "Responsive Static Pages",
    title: "Responsive Campaign Page Builder for All Your Marketing Needs",
    description:
      "Verthem empowers you to bring your visions to life. Say goodbye to the struggle of creating campaign pages that truly stand out from your competitors.",
    header: <FeatureImgTwo />,
  },
];
