"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LinkProps } from "next/link";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";

const menuItems = [
  { name: "Product", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

const MobileMenu = ({
  title,
  href,
}: {
  title: string;
  href: LinkProps["href"];
}) => {
  const mobileMenuVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  return (
    <motion.div variants={mobileMenuVars} className="font-krona uppercase ">
      <Link href={href}>
        <span className="text-3xl text-slate-950">{title}</span>
      </Link>
    </motion.div>
  );
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 0, 0.35, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

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
          <span className="font-krona uppercase pl-2">Verthem</span>
        </div>
      </a>
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        <Menu />
      </label>
      <nav
        aria-label="Header Navigation"
        className="flex max-h-0 w-full flex-col items-center overflow-hidden lg:ml-24 lg:max-h-full lg:flex-row"
      >
        <ul className="hidden lg:flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          {menuItems.map((item, index) => (
            <li key={index} className="mx-6">
              <a className="font-medium dark:text-white/90" href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
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

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed origin-top left-0 top-0 w-full h-screen p-4 bg-verthem-900 z-20 lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <div className="flex items-center">
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
                      <span className="font-krona uppercase pl-2">Verthem</span>
                    </div>
                  </a>
                </div>
                <label
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <X />
                </label>
              </div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {menuItems.map((item, index) => (
                  <div key={index} className="overflow-hidden">
                    <MobileMenu
                      key={index}
                      title={item.name}
                      href={item.href}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
