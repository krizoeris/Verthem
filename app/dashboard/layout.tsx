import type { Metadata } from "next";
import Aside from "@/components/Aside";
import Header from "@/components/Header";

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
            <Aside/>
            <div className="flex flex-col w-[80%]">
                <Header/>
                <div className="p-8">{ children }</div>
            </div>
        </div>
    );
}
