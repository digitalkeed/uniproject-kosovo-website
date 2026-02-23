import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";

const heroImage =
  "https://images.pexels.com/photos/7688327/pexels-photo-7688327.jpeg?auto=compress&cs=tinysrgb&w=1200";

const nextSteps = [
  "Plotësoni formularin me detajet e objektit dhe kontaktin.",
  "Rishikojmë kërkesën dhe përgatitim ofertën.",
  "Ju kontaktojmë brenda 24–48 orëve.",
];

export const metadata = {
  title: "Kontakt | UNI PROJECT",
  description:
    "Plotësoni formularin për të kërkuar një ofertë – do të ju kontaktojmë brenda shkurt.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        layout="imageFull"
        lead="Na kontaktoni"
        title="Kontakt / Kerko oferte"
        description="Plotësoni formularin me detajet e objektit – lokacione, sipërfaqe, frekuencë, sektor. Do të rishikojmë kërkesën dhe do të ju kontaktojmë brenda 24–48 orëve me një ofertë të përshtatshme. Për pyetje të shpejta, na telefononi ose na shkruani."
        image={{
          src: heroImage,
          alt: "Komunikim dhe oferta – UNI PROJECT",
        }}
        ctaPrimary={{ label: "Shko te formulari", href: "#form" }}
      />
      <Section id="form" className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,320px]">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Formulari i kërkesës
            </h2>
            <p className="mt-2 text-muted-foreground">
              Sa më shumë detaje të na jepni, aq më të saktë do të jetë oferta.
            </p>
            <ContactForm />
          </div>
          <aside className="lg:order-none">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-semibold text-foreground">
                Hapat e ardhshëm
              </h3>
              <ol className="mt-4 space-y-3 list-decimal list-inside text-sm text-muted-foreground">
                {nextSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-muted-foreground">
                Për pyetje të shpejta:{" "}
                <a
                  href="tel:+38344123456"
                  className="text-primary hover:underline font-medium"
                >
                  044 123 456
                </a>
                {" · "}
                <a
                  href="mailto:info@uniproject-ks.com"
                  className="text-primary hover:underline font-medium"
                >
                  info@uniproject-ks.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
