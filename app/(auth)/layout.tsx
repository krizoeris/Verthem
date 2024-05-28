import VerthemBG from "@/components/auth/VerthemBg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">{children}</div>

      <VerthemBG />
    </div>
  );
}
