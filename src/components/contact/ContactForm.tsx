"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: Record<string, string>): Record<string, string> {
    const err: Record<string, string> = {};
    if (!data.lokacione?.trim()) err.lokacione = "Lokacionet janë të detyrueshme.";
    if (!data.email?.trim()) err.email = "Email është i detyrueshëm.";
    else if (!EMAIL_REGEX.test(data.email.trim()))
      err.email = "Ju lutem vendosni një email të vlefshëm.";
    return err;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries()
    ) as Record<string, string>;

    const validation = validate(data);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-ds-32 rounded-card border border-border bg-primary/5 p-ds-32 text-center shadow-soft">
        <h2 className="text-h3 text-foreground">
          Faleminderit
        </h2>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Mesazhi juaj u dërgua. Do të ju kontaktojmë shumë shpejt, brenda
          24–48 orëve.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 w-full min-h-[44px] rounded-card border border-border px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="mt-ds-32 space-y-ds-16">
      <div>
        <label
          htmlFor="lokacione"
          className="block text-sm font-medium text-foreground"
        >
          Lokacionet <span className="text-red-600">*</span>
        </label>
        <input
          id="lokacione"
          name="lokacione"
          type="text"
          required
          className={inputClass}
          placeholder="p.sh. Prishtinë, objekt A"
          aria-invalid={!!errors.lokacione}
        />
        {errors.lokacione && (
          <p className="mt-1 text-sm text-red-600">{errors.lokacione}</p>
        )}
      </div>
      <div>
        <label htmlFor="m2" className="block text-sm font-medium text-foreground">
          Sipërfaqja (m²)
        </label>
        <input
          id="m2"
          name="m2"
          type="text"
          className={inputClass}
          placeholder="p.sh. 500"
        />
      </div>
      <div>
        <label
          htmlFor="frekuenca"
          className="block text-sm font-medium text-foreground"
        >
          Frekuenca
        </label>
        <select
          id="frekuenca"
          name="frekuenca"
          className={inputClass}
        >
          <option value="">Zgjidhni</option>
          <option value="ditor">Ditor</option>
          <option value="javor">Javor</option>
          <option value="mujor">Mujor</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="sektor"
          className="block text-sm font-medium text-foreground"
        >
          Sektor
        </label>
        <select
          id="sektor"
          name="sektor"
          className={inputClass}
        >
          <option value="">Zgjidhni</option>
          <option value="banka">Banka</option>
          <option value="zyra">Zyra</option>
          <option value="qendra-tregtare">Qendra tregtare</option>
          <option value="spital-shkolla">Spital / Shkollë</option>
          <option value="industri">Industri</option>
        </select>
      </div>
      <div>
        <label htmlFor="sla" className="block text-sm font-medium text-foreground">
          SLA / kërkesa të veçanta
        </label>
        <input
          id="sla"
          name="sla"
          type="text"
          className={inputClass}
        />
      </div>
      <div>
        <label
          htmlFor="orari"
          className="block text-sm font-medium text-foreground"
        >
          Orari i dëshiruar
        </label>
        <input
          id="orari"
          name="orari"
          type="text"
          className={inputClass}
          placeholder="p.sh. 08:00 - 16:00"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="email@shembull.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="mesazh"
          className="block text-sm font-medium text-foreground"
        >
          Mesazh (opsional)
        </label>
        <textarea
          id="mesazh"
          name="mesazh"
          rows={3}
          className={`${inputClass} min-h-[80px]`}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Diçka shkoi keq. Ju lutem provoni përsëri.
        </p>
      )}
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {status === "sending" ? "Duke dërguar…" : "Dërgo"}
      </Button>
    </form>
  );
}
