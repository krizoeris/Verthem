import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Integrations",
  };

export default function IntegrationsPageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>{ children }</>
    );
}
