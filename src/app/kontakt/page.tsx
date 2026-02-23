import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageTemplate } from "@/components/layout/PageTemplate";

const heroImage =
  "https://images.pexels.com/photos/7688327/pexels-photo-7688327.jpeg?auto=compress&cs=tinysrgb&w=1200";

const faq = [
  {
    q: "Sa shpejt përgjigjemi?",
    a: "Brenda 24–48 orëve për kërkesa oferte. Për urgjenca, na telefononi.",
  },
  {
    q: "A kërkohet kontratë afatgjatë?",
    a: "Jo. Ofertojmë edhe shërbime fleksibël pa angazhim minimal.",
  },
];

export const metadata = {
  title: "Kontakt | UNI PROJECT",
  description:
    "Plotësoni formularin për të kërkuar një ofertë – do të ju kontaktojmë brenda shkurt.",
};

export default function KontaktPage() {
  return (
    <PageTemplate
      hero={{
        layout: "imageFull",
        lead: "Na kontaktoni",
        title: "Kontakt / Kerko oferte",
        description:
          "Plotësoni formularin me detajet e objektit – lokacione, sipërfaqe, frekuencë, sektor. Do të rishikojmë kërkesën dhe do të ju kontaktojmë brenda 24–48 orëve me një ofertë të përshtatshme. Për pyetje të shpejta, na telefononi ose na shkruani.",
        image: {
          src: heroImage,
          alt: "Komunikim dhe oferta – UNI PROJECT",
        },
        ctaPrimary: { label: "Shko te formulari", href: "#form" },
      }}
      cta={{
        title: "Zgjidhja për objektin tuaj fillon këtu",
        description:
          "Na tregoni për objektin – lokacione, m², frekuencë – dhe do të ju kontaktojmë brenda shkurt. Pa angazhim.",
        primaryLabel: "Kerko oferte",
        primaryHref: "/kontakt",
        secondaryLabel: "Shiko shërbimet",
        secondaryHref: "/sherbimet",
      }}
    >
      <Section id="form" className="py-section">
        <div className="grid gap-ds-32 lg:grid-cols-[1fr,340px] lg:gap-ds-40">
          <div className="rounded-card bg-surface border border-border p-[var(--card-padding)] shadow-soft">
            <h2 className="text-h3 text-foreground">
              Formulari i kërkesës
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Sa më shumë detaje të na jepni, aq më të saktë do të jetë oferta.
            </p>
            <ContactForm />
          </div>
          <aside className="space-y-ds-24">
            <div className="rounded-card bg-surface border border-border p-[var(--card-padding)] shadow-soft">
              <div className="inline-flex items-center gap-2 rounded-button bg-primary/10 text-primary px-3 py-1.5 text-label font-medium mb-ds-16">
                Përgjigjemi brenda 24–48 orëve
              </div>
              <h3 className="text-h3 text-foreground">Kontakti</h3>
              <ul className="mt-ds-12 space-y-ds-12 text-sm text-muted-foreground">
                <li>
                  <span className="block text-label text-foreground">Telefon</span>
                  <a href="tel:+38344123456" className="text-primary hover:underline font-medium">
                    044 123 456
                  </a>
                </li>
                <li>
                  <span className="block text-label text-foreground">Email</span>
                  <a href="mailto:info@uniproject-ks.com" className="text-primary hover:underline font-medium">
                    info@uniproject-ks.com
                  </a>
                </li>
                <li>
                  <span className="block text-label text-foreground">Adresa</span>
                  Prishtinë, Kosovë
                </li>
              </ul>
            </div>
            <div className="rounded-card bg-surface border border-border p-[var(--card-padding)] shadow-soft">
              <h3 className="text-h3 text-foreground">Pyetje të shpeshta</h3>
              <ul className="mt-ds-12 space-y-ds-16">
                {faq.map((item) => (
                  <li key={item.q}>
                    <p className="font-medium text-foreground text-sm">{item.q}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </PageTemplate>
  );
}
