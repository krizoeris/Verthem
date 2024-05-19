import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile",
  };

export default function ProfilePageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
