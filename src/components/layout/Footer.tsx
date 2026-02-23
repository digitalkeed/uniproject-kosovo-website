import Link from "next/link";
import { footerNav, footerServiceLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="mx-auto max-w-container w-full px-page-x py-ds-56">
        <div className="grid gap-ds-40 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-heading text-lg font-semibold text-white hover:text-accent transition-colors">
              UNI PROJECT Sh.P.K.
            </Link>
            <p className="mt-ds-8 text-sm text-white/70 max-w-xs leading-relaxed">
              Pastrim profesional, mirembajtje teknike dhe facility management
              në të gjithë Kosovën. Që nga 2001.
            </p>
          </div>

          <div>
            <h3 className="text-label text-white/80 font-medium">
              Navigimi
            </h3>
            <ul className="mt-ds-12 space-y-ds-8">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label text-white/80 font-medium">
              Shërbimet
            </h3>
            <ul className="mt-ds-12 space-y-ds-8">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label text-white/80 font-medium">
              Kontakti
            </h3>
            <ul className="mt-ds-12 space-y-ds-8 text-sm text-white/70">
              <li>Prishtinë, Kosovë</li>
              <li>
                <a href="tel:+38344123456" className="hover:text-white transition-colors">
                  044 123 456
                </a>
              </li>
              <li>
                <a href="mailto:info@uniproject-ks.com" className="hover:text-white transition-colors">
                  info@uniproject-ks.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-ds-40 pt-ds-32 border-t border-white/20 text-center text-sm text-white/50">
          © {new Date().getFullYear()} UNI PROJECT Sh.P.K. Të gjitha të drejtat e rezervuara.
        </div>
      </div>
    </footer>
  );
}
