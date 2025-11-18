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

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre nós", href: "/sobre" },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "LSA / Salvatagem", href: "/servicos/lsa-salvatagem" },
      { label: "Testes de carga", href: "/servicos/testes-de-carga" },
      { label: "Inspeções", href: "/servicos/inspecoes-engenharia" },
    ],
  },
  { label: "Contato", href: "/contato" },
  {
    label: "Área do Colaborador",
    href: "https://deltasafety.com.br/cursos",
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // menu mobile
  const [servicesOpen, setServicesOpen] = useState(false); // dropdown Serviços
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
    }, 150); // pequeno delay pra não sumir na hora
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-40 h-10 md:w-48 md:h-12">
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
            // item com submenu (Serviços)
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

            // links normais
            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b-2 border-transparent pb-1 text-[#1c2743] hover:text-sky-600 transition-colors"
                >
                  {item.label}
                </a>
              );
            }

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
          {/* botão bonequinho / área do cliente */}
          <a
            href="https://delta.relatorio.app/index.php?class=LoginForm"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-sm hover:bg-sky-600 transition-colors"
          >
            <span className="sr-only">Área do cliente</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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

          {/* botão WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+empresa+de+voc%C3%AAs+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <span className="sr-only">Falar no WhatsApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.04 0C5.74 0 .54 5.19.54 11.49c0 2.02.53 4 1.54 5.75L0 24l6.93-2.02a11.47 11.47 0 0 0 5.11 1.26h.01c6.3 0 11.49-5.2 11.49-11.5 0-3.07-1.2-5.96-3.52-8.26ZM12.05 21.2h-.01a9.7 9.7 0 0 1-4.95-1.36l-.36-.21-4.11 1.2 1.19-4.01-.24-.41A9.7 9.7 0 0 1 2.3 11.5C2.3 6.4 6.95 1.76 12.04 1.76c2.6 0 5.04 1.01 6.88 2.84a9.64 9.64 0 0 1 2.85 6.88c0 5.09-4.65 9.72-9.72 9.72Zm5.33-7.26c-.29-.14-1.73-.85-2--.95-.27-.1-.47-.14-.67.14-.2.29-.77.95-.94 1.15-.17.19-.35.22-.64.07-.29-.14-1.2-.44-2.29-1.4-.84-.75-1.4-1.68-1.57-1.97-.16-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.16.19-.27.29-.46.1-.19.05-.36-.02-.5-.07-.14-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .14.19 2 3.05 4.84 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.73-.71 1.98-1.39.25-.68.25-1.26.18-1.39-.07-.12-.26-.19-.55-.33Z" />
            </svg>
          </a>
        </div>

        {/* BOTÃO MOBILE (HAMBURGER) */}
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
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-colors ${
                      isActive(item.href)
                        ? "text-sky-600"
                        : "text-[#1c2743] hover:text-sky-600"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
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
                )}

                {/* subitens no mobile */}
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

            {/* Ações extras no mobile */}
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
