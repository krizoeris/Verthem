import type { Metadata } from "next";
import Aside from "@/components/dashboard/Aside";
import Header from "@/components/dashboard/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen">
      <Aside />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-col flex-grow h-0 p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
