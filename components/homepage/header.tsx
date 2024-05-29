import React from "react";
import { Krona_One } from "next/font/google";
import Image from "next/image";

const kronaOne = Krona_One({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <header className="container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
      <a
        href="#"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        <div className="flex lg:flex-1">
          <Image
            src="/images/homepage/vt-logo.svg"
            alt=""
            width={32}
            height={32}
          />
          <span className={`${kronaOne.className} uppercase pl-2`}>
            Verthem
          </span>
        </div>
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          {["Product", "Solutions", "Pricings", "Contact"].map(
            (item, index) => (
              <li key={index} className="mx-6">
                <a className="font-medium dark:text-white/90" href="#">
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <a
            href="/login"
            className="whitespace-nowrap font-medium dark:text-white/90"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="verthem-btn flex items-center whitespace-nowrap rounded-[8px] bg-[#00CAF8] px-5 py-3 font-medium text-white"
          >
            Sign up for free
          </a>
        </div>
      </nav>
    </header>
  );
}
