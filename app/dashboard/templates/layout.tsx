import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Templates",
  };

export default function TemplatesLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
