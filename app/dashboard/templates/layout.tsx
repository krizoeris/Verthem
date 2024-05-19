import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Templates",
  };

export default function TemplatesPageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
