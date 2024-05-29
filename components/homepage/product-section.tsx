import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/homepage/ui/bento-grid";
import { Krona_One } from "next/font/google";
import Image from "next/image";

const kronaOne = Krona_One({ weight: "400", subsets: ["latin"] });

export default function ProductSection() {
  return (
    <section className="product-section">
      <div className="mb-28">
        <div className="mb-8 text-center">
          <span
            className={`${kronaOne.className} text-md uppercase text-[#00CAF8] pb-4`}
          >
            Powerfull Visual Builder
          </span>
          <h2 className="text-4xl font-medium">
            Create Stunning Campaign Pages With Ease
          </h2>
        </div>
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProductImgOne = () => {
  return (
    <div className="flex flex-1 justify-center w-full h-full max-h-[12rem] rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-50 overflow-hidden">
      <Image
        src="/images/homepage/vt-learning.svg"
        alt="avatar"
        height="540"
        width="260"
        className="object-cover -mt-2"
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
        height="330"
        width="278"
        className="-mb-10"
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
        height="130"
        width="157"
        className=""
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
