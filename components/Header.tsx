// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
  // Ajusta esse link para a URL REAL do painel de cursos
  { label: "Área do Colaborador", href: "https://deltasafety.com.br/cursos", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Trocar depois pela logo da Delta */}
          <div className="w-9 h-9 rounded-md bg-amber-400 flex items-center justify-center font-extrabold text-slate-900">
            Δ
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-sm md:text-base">
              Grupo Delta
            </div>
            <div className="text-[11px] md:text-xs text-slate-300">
              Juntos, construindo um futuro seguro.
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-200 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-amber-400"
                    : "text-slate-200 hover:text-amber-300"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Botão WhatsApp / CTA */}
        <div className="hidden md:flex">
          <a
            href="https://wa.me/5521XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="text-xs md:text-sm px-3 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 transition-colors"
          >
            Fale com um especialista
          </a>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-slate-700"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1">
            <span className="block w-5 h-[2px] bg-slate-100" />
            <span className="block w-5 h-[2px] bg-slate-100" />
          </div>
        </button>
      </div>

      {/* Dropdown mobile */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-200 hover:text-amber-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    pathname === item.href
                      ? "text-amber-400"
                      : "text-slate-200 hover:text-amber-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <a
              href="https://wa.me/5521XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-xs px-3 py-2 rounded-lg bg-amber-400 text-slate-950 font-semibold text-center"
            >
              Fale com um especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
