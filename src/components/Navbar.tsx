import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between border-b bg-white">
      <div className="font-bold text-xl">Bangun Jaya Abadi</div>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>

        {/* Switch Bahasa */}
        <div className="flex gap-2">
          <Link href="/id">ID</Link>
          <Link href="/en">EN</Link>
        </div>
      </div>
    </nav>
  );
}
