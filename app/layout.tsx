// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grupo Delta - Testes de Carga e Engenharia",
  description: "Juntos, construindo um futuro seguro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Ads / Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17413489991"
        />
        <Script
          id="ga-delta"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17413489991');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
