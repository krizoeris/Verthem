import type { Metadata } from "next";
import Aside from "@/components/dashboard/Aside";
import Header from "@/components/dashboard/Header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen">
      <Aside />
      <div className="flex flex-col w-full">
        <Header />
        <div className="h-screen p-8">{children}</div>
      </div>
    </div>
  );
}
