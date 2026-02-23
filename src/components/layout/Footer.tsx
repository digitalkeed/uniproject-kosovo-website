import Link from "next/link";
import { footerNav, footerServiceLinks } from "@/content/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-900 text-white">
      <div className="mx-auto max-w-container px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-bold text-white hover:text-primary-green transition-colors">
              UNI PROJECT Sh.P.K.
            </Link>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Pastrim profesional, mirembajtje teknike dhe facility management
              në të gjithë Kosovën. Që nga 2001.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigimi
            </h3>
            <ul className="mt-3 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Shërbimet
            </h3>
            <ul className="mt-3 space-y-2">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Kontakti
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
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

        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} UNI PROJECT Sh.P.K. Të gjitha të drejtat e rezervuara.
        </div>
      </div>
    </footer>
  );
}
