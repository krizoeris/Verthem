import React from "react";
import { Krona_One } from "next/font/google";
import Image from "next/image";

const kronaOne = Krona_One({ weight: "400", subsets: ["latin"] });

export default function FeaturesSection() {
  return (
    <section className="features-section">
      {items.map((item, i) => (
        <div
          key={i}
          className="grid lg:grid-cols-2 gap-12 mb-24 even:grid-cols-reverse"
        >
          <div className=" flex flex-col justify-center">
            <span
              className={`${kronaOne.className} text-md uppercase text-[#00CAF8] mb-6`}
            >
              {item.subtitle}
            </span>
            <h2 className="text-3xl font-medium mb-2">{item.title}</h2>
            <p className="mb-10">{item.description}</p>
            <a
              href="/signup"
              className="verthem-btn w-fit rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white"
            >
              Start building for free
            </a>
          </div>
          <div>{item.header}</div>
        </div>
      ))}
    </section>
  );
}

const FeatureImgOne = () => {
  return (
    <div className="flex flex-1 relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2] justify-center w-full h-full min-h-[440px] rounded-xl overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-cyan-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Image
        src="/images/homepage/feat-1-alignment.svg"
        alt="avatar"
        height="534"
        width="400"
        className="mt-8 -mb-24 -mr-24 z-10"
      />
      <Image
        src="/images/homepage/feat-1-color.svg"
        alt="avatar"
        height="330"
        width="360"
        className="mt-8 -mr-16 z-20"
      />
    </div>
  );
};
const FeatureImgTwo = () => {
  return (
    <div className="flex flex-1 relative dark:bg-dot-white/[0.2] bg-dot-black/[0.2] justify-center w-full h-full min-h-[440px] rounded-xl overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-cyan-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Image
        src="/images/homepage/feat-2-cols.svg"
        alt="avatar"
        height="580"
        width="780"
        className="object-cover mt-2 z-10"
      />
    </div>
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
