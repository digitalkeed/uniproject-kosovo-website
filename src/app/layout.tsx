import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    <html lang="sq">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
