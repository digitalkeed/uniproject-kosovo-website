"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/content/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      isActive(href) ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[var(--shadow-card)]">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0 flex items-center" aria-label="UNI PROJECT – Ballina">
          <Image
            src="/logo.svg"
            alt="UNI PROJECT"
            width={140}
            height={62}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Kryesor">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+38344123456"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            044 123 456
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-card-hover)] transition-all duration-200"
          >
            Kerko oferte
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Hap menynë"
        >
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground mb-1" />
          <span className="block w-5 h-0.5 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4">
          <nav className="flex flex-col gap-2" aria-label="Mobil">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 ${isActive(item.href) ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 py-2 text-primary font-medium"
              onClick={() => setOpen(false)}
            >
              Kerko oferte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
