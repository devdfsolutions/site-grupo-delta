// app/contato/page.tsx
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Grupo Delta",
};

export default function ContatoPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5521986560236&text=Hello%2C+I+would+like+to+talk+to+the+sales+team.&type=phone_number&app_absent=0";

  const mapsUrl =
    "https://www.google.com/maps?q=Rua+Alberto+Siqueira,+1065,+Duque+de+Caxias,+RJ&output=embed";

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          MAIN BLOCK – TEXT + FORM
      ====================================================== */}
      <section className="bg-slate-50 py-12 md:py-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* LEFT TEXT */}
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Solutions and Engineering
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#1c2743]">
              Talk to a specialist.
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md">
              Fill out the form next to this section or contact us directly
              through our service channels. Our sales team is ready to
              understand your needs and recommend the best solution for load
              testing, rentals, LSA, and MRO.
            </p>

            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-[#1c2743]">Email:</span>{" "}
                <Link
                  href="/contato"
                  className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
                >
                  comercial@grupodelta.ind.br
                </Link>
              </p>
              <p>
                <span className="font-semibold text-[#1c2743]">Phone:</span>{" "}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
                >
                  (21) 98656-0236
                </a>{" "}
                | (21) 99530-3032 | (21) 3491-5335
              </p>
              <p>
                <span className="font-semibold text-[#1c2743]">Address:</span>{" "}
                Rua Alberto Siqueira, 1065 – Vila São Sebastião, Duque de Caxias
                – RJ
              </p>
            </div>
          </div>

          {/* LIGHT FORM IN THE SITE STYLE */}
          <ContactForm />
        </div>
      </section>

      {/* =====================================================
          MAP + ADDRESS
      ====================================================== */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
              Where we are
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Rua Alberto Siqueira, 1065 – Lots 32 and 33 – Vila São Sebastião –
              ZIP 25065-225 – Duque de Caxias, Rio de Janeiro.
            </p>
          </div>

          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe
              src={mapsUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL BLOCK – CONTACT INFO (CLICKABLE)
      ====================================================== */}
      <section className="bg-slate-50 py-14 md:py-16 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Grupo Delta Solutions and Engineering
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1c2743]">
              Contact Information
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Click one of the channels below to speak directly with our sales
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-sm text-slate-700">
            {/* Email -> goes to /contato (already here, but keeps the pattern) */}
            <Link
              href="/contato"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-sky-400 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  ✉
                </span>
              </div>
              <h3 className="font-semibold text-[#1c2743]">Sales Email</h3>
              <p className="text-sky-600 font-medium">
                comercial@grupodelta.ind.br
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Click to open the form
              </p>
            </Link>

            {/* Phones -> WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  ☎
                </span>
              </div>
              <h3 className="font-semibold text-[#1c2743]">Phone</h3>
              <p>(21) 98656-0236 (24 hours)</p>
              <p>(21) 99530-3032</p>
              <p>(21) 3491-5335</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Click to chat on WhatsApp
              </p>
            </a>

            {/* Address -> opens maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Alberto+Siqueira,+1065,+Duque+de+Caxias,+RJ"
              target="_blank"
              rel="noreferrer"
              className="group space-y-2 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm hover:shadow-md hover:border-sky-400 transition-all"
            >
              <div className="flex justify-center mb-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  📍
                </span>
              </div>
              <h3 className="font-semibold text-[#1c2743]">Delta Base</h3>
              <p>Rua Alberto Siqueira, 1065</p>
              <p>Lots 32 and 33 – Vila São Sebastião</p>
              <p>Duque de Caxias – RJ</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                Click to open in Maps
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
