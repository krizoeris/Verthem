import { Outfit } from "next/font/google";
import { Krona_One } from "next/font/google";
import { ThemeProvider } from "@/components/homepage/theme-provider";
import Footer from "@/components/homepage/footer";
import Header from "@/components/homepage/header";
import HeroSection from "@/components/homepage/hero-section";
import ProductSection from "@/components/homepage/product-section";
import MarqueeText from "@/components/homepage/ui/marquee-text";
import FeaturesSection from "@/components/homepage/features-section";
import ThemeToggle from "@/components/homepage/ui/theme-toggle";

const outfit = Outfit({ subsets: ["latin"] });
const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-krona",
});

export default function HomePage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={`${outfit.className} ${kronaOne.variable} verthem-homepage overflow-x-hidden min-h-screen bg-gradient-to-bl from-indigo-200 via-teal-100/10 to-indigo-200 dark:from-cyan-950 dark:via-slate-950 dark:to-blue-950`}
      >
        <div className="fixed inset-0 h-full bg-clip-content bg-grid-slate-200/[0.4] dark:bg-grid-slate-900/[0.4] "></div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="container flex-grow">
            <HeroSection />
            <ProductSection />
            <MarqueeText />
            <FeaturesSection />
          </main>
          <Footer />

          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}
