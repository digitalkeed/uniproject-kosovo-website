import Image from "next/image";
import { Section } from "@/components/ui/Section";

export function WhyUs() {
  return (
    <Section className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-[var(--shadow-hero)] order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
            alt="Ekipi UNI PROJECT në punë – profesionalizëm dhe përkushtim"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            Pse ne
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
            Më shumë se 24 vjet përvojë. Cilësi që ndihet.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nuk jemi thjesht furnizues shërbimesh – jemi partnerë. Me ekipe të
            trajnuara, pajisje moderne dhe një sistem raportimi dixhital që ju
            jep transparencë të plotë, punojmë për të mbajtur objektet tuaja të
            pastra, të sigurta dhe funksionale çdo ditë.
          </p>
          <ul className="mt-6 space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              Monitorim cilësie me sisteme dixhitale dhe raportim periodik
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              Ekip i trajnuar dhe pajisje premium
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              Gati për projekte të mëdha dhe kërkesa 24/7
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
