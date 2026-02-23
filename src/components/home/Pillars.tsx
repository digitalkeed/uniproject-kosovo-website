import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const pillars = [
  {
    title: "Pastrim Profesional",
    description:
      "Nga zyret tek qendrat tregtare, industriale dhe pas ndërtimit – përfshire dezinfektim dhe pastrim në lartësi.",
    href: "/sherbimet/pastrim-profesional",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Pastrim profesional",
  },
  {
    title: "Facility Management",
    description:
      "Mirembajtje teknike, consumables, supervizim dhe monitorim cilësie me raportim.",
    href: "/sherbimet/facility-management",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Objekt profesional – facility management",
  },
  {
    title: "On-call & Emergjenca",
    description:
      "Shërbime sezonale, emergjente dhe orar i zgjatur, kurdo që kërkohet.",
    href: "/sherbimet/on-call",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Gati 24/7",
  },
];

export function Pillars() {
  return (
    <Section id="sherbimet" className="bg-section-alt">
      <div className="text-center mb-12">
        <h2 className="text-h2 font-bold text-foreground">
          Shërbimet tona kryesore
        </h2>
        <p className="mt-3 text-body-lg text-muted-foreground max-w-content mx-auto">
          Mbështetuni te ne si partner i besueshëm – pastrim profesional, facility management
          dhe shërbime të specializuara për çdo sektor.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p) => (
          <Card key={p.title} href={p.href} variant="service">
            <div className="relative aspect-[16/10] -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-card">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                className="object-cover transition-transform duration-slow ease-out group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-h3 text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
