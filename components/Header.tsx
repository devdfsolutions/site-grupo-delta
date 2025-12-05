// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string }[];
};

/**
 * ORDEM DO MENU:
 * Início, Serviços, Locação, Soluções em MRO, Contato, Sobre nós
 */
const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "LSA / Salvatagem", href: "/servicos/lsa-salvatagem" },
      { label: "Testes de carga", href: "/servicos/testes-de-carga" },
      { label: "Inspeções", href: "/servicos/inspecoes-engenharia" },
    ],
  },
  { label: "Locação", href: "/locacao" },
  { label: "Soluções em MRO", href: "/solucoes-em-mro" },
  { label: "Contato", href: "/contato" },
  { label: "Sobre nós", href: "/sobre" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeout = useRef<number | null>(null);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(href + "/");

  const handleServicesEnter = () => {
    if (servicesTimeout.current) {
      window.clearTimeout(servicesTimeout.current);
      servicesTimeout.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-40 h-10 md:w-48 md:h-20">
            <Image
              src="/img/logodelta.png"
              alt="Delta Group"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1c2743]">
          {navItems.map((item) => {
            // ITEM COM DROPDOWN (SERVIÇOS)
            if (item.children && item.children.length > 0) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 border-b-2 pb-1 transition-colors ${
                      isActive(item.href)
                        ? "border-sky-500 text-sky-600"
                        : "border-transparent text-[#1c2743] hover:text-sky-600"
                    }`}
                  >
                    {item.label}
                    <span className="text-[10px] leading-none">▼</span>
                  </Link>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 top-full mt-1 min-w-[220px] rounded-xl border border-slate-200 bg-white shadow-lg py-2 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-1 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2 text-sm leading-tight transition-colors ${
                          isActive(child.href)
                            ? "bg-slate-100 text-sky-700"
                            : "text-slate-700 hover:bg-slate-100 hover:text-sky-700"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // ITEM NORMAL
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive(item.href)
                    ? "border-sky-500 text-sky-600"
                    : "border-transparent text-[#1c2743] hover:text-sky-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ÍCONES À DIREITA (DESKTOP) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Área do cliente */}
          <a
            href="https://delta.relatorio.app/index.php?class=LoginForm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm hover:bg-sky-600 transition-colors"
          >
            <span className="sr-only">Área do cliente</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 20.25C6.5 18.5 9 17 12 17s5.5 1.5 7 3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+empresa+de+voc%C3%AAs+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] shadow-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <span className="sr-only">Falar no WhatsApp</span>
            <div className="relative w-9 h-9">
              <Image
                src="/img/whatsapp.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded border border-slate-300 text-slate-700"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menu</span>
          <div className="space-y-1">
            <span className="block w-5 h-[2px] bg-slate-800" />
            <span className="block w-5 h-[2px] bg-slate-800" />
          </div>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-sky-600"
                      : "text-[#1c2743] hover:text-sky-600"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="ml-3 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`text-xs transition-colors ${
                          isActive(child.href)
                            ? "text-sky-600"
                            : "text-slate-600 hover:text-sky-600"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        • {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-3 flex gap-3">
              <a
                href="https://delta.relatorio.app/index.php?class=LoginForm"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-200 text-[#1c2743] text-center font-medium"
                onClick={() => setOpen(false)}
              >
                Área do cliente
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+empresa+de+voc%C3%AAs+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-[#25D366] text-white text-center font-semibold"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
