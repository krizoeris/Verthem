import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pages",
  };

export default function CampaignsPageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
