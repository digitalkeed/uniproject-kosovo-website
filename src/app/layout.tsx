import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNI PROJECT Sh.P.K. | Pastrim profesional & Facility Management – Kosovë",
  description:
    "UNI PROJECT ofron pastrim profesional, mirembajtje teknike dhe facility management në të gjithë Kosovën – me standarde ISO, staf të trajnuar dhe raportim dixhital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
