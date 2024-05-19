export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-center md:h-screen">
      {children}
    </main>
  );
}
