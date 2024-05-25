import type { Metadata } from "next";
import { Suspense } from 'react'
import Loading from "./loading";

export const metadata: Metadata = {
    title: "Campaigns",
};

export default function CampaignsPageLayout({
    children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                { children }
            </Suspense>
        </>
    );
}
