"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 min-h-[72px] flex items-center border-b border-border bg-surface/95 backdrop-blur shadow-soft">
      <div className="mx-auto flex max-w-container items-center justify-between gap-gutter w-full px-page-x h-16 md:h-[80px]">
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

        <nav className="hidden md:flex items-center gap-ds-32" aria-label="Kryesor">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-nav transition-colors
                ${isActive(item.href)
                  ? "text-primary underline decoration-2 underline-offset-4"
                  : "text-foreground/80 hover:text-primary hover:underline decoration-2 underline-offset-4"}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-ds-24">
          <a
            href="tel:+38344123456"
            className="text-nav text-muted-foreground hover:text-primary transition-colors"
          >
            044 123 456
          </a>
          <Button href="/kontakt" variant="primary">
            Kërko ofertë
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-card hover:bg-muted min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        <div className="md:hidden border-t border-border bg-surface px-page-x py-ds-16">
          <nav className="flex flex-col gap-2" aria-label="Mobil">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 text-nav ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4" onClick={() => setOpen(false)}>
              <Button href="/kontakt" variant="primary" className="w-full justify-center">
                Kërko ofertë
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
