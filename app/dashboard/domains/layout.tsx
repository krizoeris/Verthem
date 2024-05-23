import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Domains",
  };

export default function DomainsPageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
