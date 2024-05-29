import React from "react";
import { Github } from "lucide-react";
import Image from "next/image";

const footerMenu = [
  { name: "Product", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 mt-24">
      <div className="container mx-auto border-b border-slate-400 mb-14 px-4 pb-8 pt-16">
        <nav className="flex flex-col lg:flex-row w-full items-center justify-between">
          <a
            href="#"
            className="flex items-center text-2xl text-white whitespace-nowrap mb-6 lg:mb-2"
          >
            <Image
              src="/images/homepage/vt-logo.svg"
              alt=""
              width={28}
              height={28}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <span className="font-krona uppercase pl-2">Verthem</span>
          </a>
          <ul className="flex flex-row items-center">
            {footerMenu.map((item, index) => (
              <li key={index} className="mx-6">
                <a className="font-medium text-white/90" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="my-4 hidden lg:flex items-center ">
            <a
              href="https://github.com/krizoeris/Verthem"
              target="_blank"
              className="text-slate-500 hover:text-white"
            >
              <Github />
            </a>
          </div>
        </nav>
      </div>
      <div className="container flex flex-col lg:flex-row items-center justify-center pb-16">
        <span className="font-light px-4 text-white text-base lg:text-[16px]">
          <a href="/">Verthem</a> {currentYear} &copy; All Rights Reserved
        </span>
        <a
          href="#"
          className="text-md font-light text-slate-500 hover:text-white px-4"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-md font-light text-slate-500 hover:text-white px-4"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
