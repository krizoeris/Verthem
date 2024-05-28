import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div
      className={`${outfit.className} verthem-homepage overflow-x-hidden min-h-screen bg-gradient-to-bl from-indigo-200 via-teal-100/10 to-indigo-200`}
    >
      <div className="fixed inset-0 h-full bg-clip-content bg-grid-slate-200/[0.4] dark:bg-grid-white/[0.2]"></div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <main className="container flex-grow"></main>
      </div>
    </div>
  );
}
