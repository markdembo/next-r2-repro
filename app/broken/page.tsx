import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src="/static/a.jpeg" className="w-48" />
      <img src="/static/b.jpeg" className="w-48" />
    </main>
  );
}
