// app/servicos/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* =======================================
   SERVICES LIST (SAME AS HOME)
   ======================================= */
const services = [
  {
    slug: "load-testing",
    title: "Load Testing",
    description:
      "Static and dynamic tests with issuance of certificates and reports in accordance with classification society requirements and applicable standards.",
    image: "/img/servicos/testes-carga.jpg",
  },
  {
    slug: "lsa-lifesaving",
    title: "LSA / Lifesaving",
    description:
      "Inspections, maintenance, and repairs on boats, winches, cranes, davits, and lifesaving equipment, ensuring availability and safety.",
    image: "/img/servicos/lsa-salvatagem1.jpg",
  },
  {
    slug: "engineering-inspections",
    title: "Engineering & Inspections",
    description:
      "Technical inspections, detailed reports, and applied engineering support for offshore and onshore asset integrity.",
    image: "/img/servicos/inspecoes-engenharia.jpg",
  },
];

/* =======================================
   TIMELINE — NRs
   ======================================= */
const nrSteps = [
  {
    nr: "NR 10",
    label: "Safety",
    title: "Electrical Work Services.",
    description:
      "Establishes safety procedures and requirements to prevent electric shocks, short circuits, and fires.",
  },
  {
    nr: "NR 11",
    label: "Material Handling",
    title: "Transport, Handling, Storage.",
    description:
      "Establishes safety requirements for the transport, handling, and storage of materials, such as heavy or bulky loads.",
  },
  {
    nr: "NR 12",
    label: "Safety",
    title: "Work on Machinery and Equipment.",
    description:
      "Preventive safety measures for the use of machinery and equipment, ensuring workers are protected against accidents.",
  },
  {
    nr: "NR 13",
    label: "Safety",
    title: "Boilers, Pressure Vessels and Piping",
    description:
      "Operation of boilers, pressure vessels, and piping—essential equipment in various industrial sectors.",
  },
];

export default function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* =======================================
     SCROLL HIGHLIGHT EFFECT (BLUE)
     ======================================= */
  useEffect(() => {
    const handleScroll = () => {
      if (!stepRefs.current.length) return;

      const viewportMiddle = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        const distance = Math.abs(elementMiddle - viewportMiddle);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveStep(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* =======================================
          HERO WITH VIDEO
         ======================================= */}
      <section className="relative w-full min-h-[60vh] overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/clipe-servicos.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-slate-950/10" />

        <div
          className="
            relative z-10 max-w-7xl mx-auto
            px-4 md:px-10
            py-16 md:py-24
            space-y-4
          "
        >
          {/* subtitle – font size: text-sm / md:text-base */}
          <p className="text-sm md:text-base font-semibold tracking-[0.25em] text-sky-300 uppercase">
            Grupo Delta Solutions and Engineering
          </p>

          {/* title – font size: text-4xl / md:text-6xl */}
          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Services
          </h1>

          {/* paragraph – full text */}
          <p className="text-base md:text-lg text-slate-100 max-w-2xl">
            Our solutions are designed to meet the demands of vessels,
            platforms, shipyards, and onshore industrial units, supported by
            specialized teams and an absolute focus on safety, compliance, and
            operational availability.
          </p>
        </div>
      </section>

      {/* =======================================
          MAIN BLOCK
         ======================================= */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* =======================================
            MAIN SERVICES GRID
           ======================================= */}
        <section className="space-y-4">
          {/* title – font size: text-2xl / md:text-3xl */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.1em] text-sky-700 uppercase">
            Main services
          </h2>

          {/* paragraph – full text */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Our solutions are designed to meet the demands of vessels,
            platforms, shipyards, and onshore industrial units, supported by
            specialized teams and a strong focus on safety and compliance.
          </p>

          {/* CARDS GRID – same style as home */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicos/${s.slug}`}
                className="group relative block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1c2743]/60 min-h-[320px]"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* title over image */}
                <div className="relative z-10 flex h-full items-center justify-center text-white font-semibold text-xl tracking-wide text-center px-4 transition-opacity duration-300 group-hover:opacity-0">
                  {s.title}
                </div>

                {/* hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="bg-white/95 w-full h-full absolute inset-0" />
                  <div className="relative z-10 text-center px-6">
                    <h3 className="text-lg font-semibold text-[#1c2743]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-700 mt-2">
                      {s.description}
                    </p>
                    <span className="block mt-3 text-xs font-semibold text-sky-700 uppercase tracking-widest">
                      View details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =======================================
            NR TIMELINE – DESKTOP + MOBILE
           ======================================= */}
        <section className="py-10 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1c2743]">
              Service: NR Certifications
            </h2>
            <p className="text-sm md:text-base text-slate-500 mt-2">
              Top 4 essential NRs for workplace safety
            </p>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:block">
            <div className="relative max-w-4xl mx-auto">
              {/* CENTER LINE */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-slate-300 h-full" />

              <div className="space-y-28">
                {nrSteps.map((step, index) => {
                  const isLeft = index % 2 === 0;
                  const isActive = index <= activeStep;
                  const isPast = index < activeStep;

                  return (
                    <div
                      key={step.nr}
                      ref={(el) => {
                        stepRefs.current[index] = el;
                      }}
                      className={`relative flex items-start gap-10 ${
                        isLeft ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* CARD */}
                      <div className="w-1/2">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8 py-6">
                          <h3 className="text-lg font-semibold">
                            {step.title}
                          </h3>
                          <p className="text-sm text-slate-600 mt-2">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* CENTER DOT */}
                      <div className="flex flex-col items-center w-[90px] relative">
                        {/* LINE BETWEEN DOTS */}
                        {index < nrSteps.length - 1 && (
                          <div
                            className={`absolute top-10 left-1/2 -translate-x-1/2 w-[2px] h-[140px] ${
                              isPast ? "bg-sky-500" : "bg-slate-300"
                            }`}
                          />
                        )}

                        {/* LABEL */}
                        <p
                          className={`text-xs font-semibold ${
                            isActive ? "text-sky-600" : "text-slate-400"
                          }`}
                        >
                          {step.nr}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {step.label}
                        </p>

                        {/* DOT */}
                        <div
                          className={`mt-2 w-10 h-10 rounded-full border-[2px] flex items-center justify-center font-semibold text-xs transition-all duration-300 ${
                            isActive
                              ? "border-sky-500 bg-sky-500 text-white shadow-md"
                              : "border-slate-300 bg-white text-sky-500"
                          }`}
                        >
                          NR
                        </div>
                      </div>

                      <div className="w-1/2" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden space-y-6 max-w-xl mx-auto">
            {nrSteps.map((step) => (
              <div
                key={step.nr}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6"
              >
                <p className="text-xs font-semibold text-sky-600">
                  {step.nr} • {step.label}
                </p>
                <h3 className="text-base font-semibold mt-1">{step.title}</h3>
                <p className="text-sm text-slate-600 mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
