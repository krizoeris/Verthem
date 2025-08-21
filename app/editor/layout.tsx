import Aside from "@/components/dashboard/Aside";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-screen">
      <Aside />
      <div className="w-full">{children}</div>
    </div>
  );
}
