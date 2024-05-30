"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleInView } from "@/utils/framer-variants";
import { useInViewHook } from "@/hooks/homepage-hooks";

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
      className="grid lg:grid-cols-2 gap-12 mb-16 lg:even:grid-cols-reverse"
    >
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        className="flex flex-col justify-center"
      >
        <motion.span
          variants={scaleInView}
          className="font-krona text-md uppercase text-[#00CAF8] mb-6"
        >
          {item.subtitle}
        </motion.span>
        <motion.h2
          variants={scaleInView}
          className="text-3xl font-semibold mb-2"
        >
          {item.title}
        </motion.h2>
        <motion.p variants={scaleInView} className="mb-10 dark:text-slate-400">
          {item.description}
        </motion.p>
        <motion.a
          variants={scaleInView}
          href="/signup"
          className="verthem-btn w-fit rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 "
        >
          Start building for free
        </motion.a>
      </motion.div>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={scaleInView}
        className="order-1 lg:order-2 inline-flex items-center justify-center p-0.5 mb-0 text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-verthem-900 via-transparent to-verthem-900 dark:from-verthem-900/30 dark:via-transparent dark:to-verthem-900/30"
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
      className="flex flex-1 justify-center w-full h-full max-h-[440px] rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-50 dark:from-indigo-100/10 dark:to-cyan-50/5 overflow-hidden"
    >
      <motion.div variants={featImgV1} className="mt-8 -mb-24 -mr-24">
        <Image
          src="/images/homepage/feat-1-alignment.svg"
          alt="avatar"
          priority
          height={484}
          width={350}
          style={{
            width: "auto",
            height: "auto",
            boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="rounded-xl feat-img-01"
        />
      </motion.div>
      <motion.div variants={featImgV2} className="mt-16 -mr-16">
        <Image
          src="/images/homepage/feat-1-color.svg"
          alt="avatar"
          height={350}
          width={380}
          style={{
            width: "auto",
            height: "auto",
            boxShadow: "-11.2px 11.2px 22.4px 0px rgba(0, 0, 0, 0.08)",
          }}
          className="rounded-xl feat-img-02"
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
      className="flex flex-1 justify-center w-full h-full lg:min-h-[440px] rounded-xl bg-gradient-to-br from-cyan-50 to-indigo-200 dark:from-indigo-100/10 dark:to-cyan-50/5 overflow-hidden"
    >
      <motion.div variants={featImgV1} className="mt-14">
        <Image
          src="/images/homepage/feat-2-cols.svg"
          alt="avatar"
          height="480"
          width="680"
          className="object-cover feat-img-03"
          style={{ boxShadow: "0px 2.8px 5.6px 0px rgba(0, 0, 0, 0.25)" }}
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
