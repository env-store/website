import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <Navbar />
      <div>
        <h1>
          <span className="text-4xl">envx</span>
        </h1>
        <article className="max-w-7xl w-full">
          envx is an end to end encrypted environment variables manager that
          securely stores your environment variables
        </article>
      </div>
    </main>
  );
}
