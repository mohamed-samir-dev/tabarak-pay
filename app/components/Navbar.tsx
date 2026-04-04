"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const links = [
  { label: "الرئيسية", href: "#home", scroll: true },
  { label: "المميزات", href: "/features", scroll: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, scroll: boolean) => {
    e.preventDefault();
    if (!scroll) {
      router.push(href);
    } else if (pathname !== "/") {
      router.push("/" + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      dir="rtl"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl"
    >
      <div
        className="flex items-center justify-between px-5 py-3 rounded-2xl shadow-lg border border-white/40"
        style={{
          background: "linear-gradient(135deg, rgba(247,249,252,0.92) 0%, rgba(220,235,220,0.85) 100%)",
          backdropFilter: "blur(18px)",
        }}
      >
        {/* Logo */}
        <span
          className="text-lg font-black tracking-tight select-none text-primary"
          style={{ fontFamily: "var(--font-cairo)" }}
        >
          🌿 تبارك الذكية
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map(({ label, href, scroll }, i) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href, scroll)}
              className={`relative px-4 py-1.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                pathname === href
                  ? "bg-secondary text-white shadow-md"
                  : i === 0
                  ? "bg-primary text-white shadow-md hover:bg-secondary"
                  : "text-primary hover:bg-primary/10"
              }`}
              style={{ fontFamily: "var(--font-cairo)" }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-xl hover:bg-primary/10 transition"
          onClick={() => setOpen(!open)}
          aria-label="toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-primary rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex flex-col gap-1 p-3 rounded-2xl border border-white/40 shadow-lg"
          style={{
            background: "linear-gradient(135deg, rgba(247,249,252,0.95) 0%, rgba(220,235,220,0.9) 100%)",
            backdropFilter: "blur(18px)",
          }}
        >
          {links.map(({ label, href, scroll }, i) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { handleNav(e, href, scroll); setOpen(false); }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                pathname === href
                  ? "bg-secondary text-white"
                  : i === 0
                  ? "bg-primary text-white"
                  : "text-primary hover:bg-primary/10"
              }`}
              style={{ fontFamily: "var(--font-cairo)" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
