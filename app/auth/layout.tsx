import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication",
  };

export default function AuthPageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
