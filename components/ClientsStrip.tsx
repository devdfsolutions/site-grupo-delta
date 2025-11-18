// components/ClientsStrip.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ClientsStrip() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("clients-strip-show");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="clients-strip w-full py-14 bg-white opacity-0 translate-y-8 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center">

          {/* PERENCO */}
          <div className="w-48 h-28 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <Image
              src="/img/clientes/perenco.png"
              alt="Perenco"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          {/* PETROBRAS */}
          <div className="w-48 h-28 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <Image
              src="/img/clientes/petrobras.png"
              alt="Petrobras"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          {/* EQUINOR */}
          <div className="w-48 h-28 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <Image
              src="/img/clientes/equinor.png"
              alt="Equinor"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          {/* OCEANPACT */}
          <div className="w-48 h-28 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <Image
              src="/img/clientes/oceanpact.png"
              alt="OceanPact"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          {/* TRIDENT ENERGY */}
          <div className="w-48 h-28 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200">
            <Image
              src="/img/clientes/trident.png"
              alt="Trident Energy"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
