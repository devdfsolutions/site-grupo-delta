// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* HERO EM VÍDEO (banner do barco) */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 min-h-[260px] md:min-h-[360px]">
        {/* Vídeo de fundo - ajuste o src para o nome do seu arquivo em /public/video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/hero-delta.mp4" type="video/mp4" />
        </video>

        {/* Overlay escuro pra dar contraste no texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

        {/* Conteúdo do hero */}
        <div className="relative z-10 p-6 md:p-10 max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300">
            Atuamos em todo o Brasil
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Testes de Carga e Engenharia
            <span className="block text-amber-300">
              com excelência e segurança.
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-200">
            O Grupo Delta oferece soluções completas em testes de carga,
            inspeções, manutenção, salvatagem e engenharia aplicada, atendendo
            projetos offshore e onshore com foco em segurança, conformidade e
            disponibilidade operacional.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contato"
              className="px-4 py-2 rounded-lg bg-amber-400 text-slate-950 text-sm font-semibold hover:bg-amber-300 transition-colors"
            >
              Fale com um especialista
            </a>
            <a
              href="/servicos"
              className="px-4 py-2 rounded-lg border border-amber-300/60 text-sm text-amber-100 hover:border-amber-200 hover:text-amber-50 transition-colors"
            >
              Conheça nossos serviços
            </a>
          </div>

          <p className="text-xs text-slate-300">
            Grupo Delta • Excelência em Soluções Offshore e Onshore.
          </p>
        </div>
      </section>

      {/* PRINCIPAIS SERVIÇOS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Principais serviços</h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Nossas soluções são estruturadas para atender às demandas de navios,
          plataformas, estaleiros e unidades industriais onshore, com equipes
          especializadas e foco em segurança e conformidade.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-slate-800 rounded-xl p-4 space-y-2 bg-slate-900/40">
            <h3 className="font-semibold text-sm">Testes de carga</h3>
            <p className="text-xs text-slate-300">
              Execução de testes de carga estáticos e dinâmicos com emissão de
              certificados conforme normas internacionais e requisitos de
              sociedades classificadoras.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-4 space-y-2 bg-slate-900/40">
            <h3 className="font-semibold text-sm">LSA / Salvatagem</h3>
            <p className="text-xs text-slate-300">
              Manutenção e inspeção de embarcações de salvamento, guinchos,
              turcos, davits e equipamentos de vida, garantindo disponibilidade
              e segurança em emergências.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-4 space-y-2 bg-slate-900/40">
            <h3 className="font-semibold text-sm">Inspeções e engenharia</h3>
            <p className="text-xs text-slate-300">
              Inspeções técnicas, engenharia aplicada e suporte à integridade de
              ativos offshore e onshore, com relatórios e laudos completos.
            </p>
          </div>
        </div>
      </section>

      {/* SUSTENTABILIDADE / DEDICAÇÃO */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Sustentabilidade e eficiência.</h2>
          <p className="text-sm text-slate-300">
            Cada projeto é conduzido com planejamento, controle e
            responsabilidade, garantindo o melhor desempenho operacional com
            foco em segurança das pessoas, do meio ambiente e do patrimônio.
          </p>
          <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden border border-slate-800">
            {/* ajuste o src para a foto que você quiser em /public/img */}
            <Image
              src="/img/sustentabilidade.jpg"
              alt="Operação sustentável do Grupo Delta"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Cada projeto é tratado com dedicação e segurança.
          </h2>
          <p className="text-sm text-slate-300">
            Atuamos lado a lado com nossos clientes, desde o planejamento até a
            execução, buscando decisões técnicas alinhadas às normas,
            certificadoras e requisitos de cada operação.
          </p>
          <div className="relative h-40 md:h-52 rounded-2xl overflow-hidden border border-slate-800">
            {/* ajuste o src para a foto que você quiser em /public/img */}
            <Image
              src="/img/dedicacao.jpg"
              alt="Equipe técnica do Grupo Delta em operação"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Somos uma empresa certificada.</h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Nossa atuação é respaldada por certificações e reconhecimentos que
          reforçam o compromisso com a qualidade, a conformidade e a segurança
          em todas as etapas dos serviços prestados.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center gap-3 bg-slate-900/40">
            <div className="relative w-20 h-12">
              <Image
                src="/img/cert-iso-9001.png"
                alt="Certificação ISO 9001:2015"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold">ISO 9001:2015</h3>
              <p className="text-[11px] text-slate-400">
                Sistema de Gestão da Qualidade (SGQ).
              </p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center gap-3 bg-slate-900/40">
            <div className="relative w-20 h-12">
              <Image
                src="/img/cert-dpc.png"
                alt="Diretoria de Portos e Costas"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold">Diretoria de Portos e Costas</h3>
              <p className="text-[11px] text-slate-400">Marinha do Brasil.</p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center gap-3 bg-slate-900/40">
            <div className="relative w-20 h-12">
              <Image
                src="/img/cert-cralog.png"
                alt="CRALOG"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold">CRALOG</h3>
              <p className="text-[11px] text-slate-400">
                Certificação em logística e confiabilidade.
              </p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center gap-3 bg-slate-900/40">
            <div className="relative w-20 h-12">
              <Image
                src="/img/cert-dnv.png"
                alt="DNV"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold">DNV</h3>
              <p className="text-[11px] text-slate-400">
                Approved Service Supplier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXCELÊNCIA / CTA FINAL */}
      <section className="grid md:grid-cols-[1.3fr,1fr] gap-8 items-center border border-slate-800 rounded-2xl p-6 bg-slate-900/40">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">
            Excelência em Soluções Offshore e Onshore.
          </h2>
          <p className="text-sm text-slate-300">
            Atuando em todo o Brasil com foco em segurança, sustentabilidade e
            eficiência, o Grupo Delta entrega soluções completas para testes de
            carga, inspeções, manutenção e salvatagem.
          </p>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• Expertise comprovada em projetos complexos.</li>
            <li>• Compromisso com normas e certificadoras internacionais.</li>
            <li>• Atuação nacional com suporte próximo ao cliente.</li>
          </ul>
          <p className="text-sm text-amber-300 font-medium">
            Juntos, construindo um futuro seguro.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold">
            Precisa de um projeto personalizado?
          </h3>
          <p className="text-xs text-slate-300">
            Conte sua necessidade para nossa equipe técnica. Vamos analisar seu
            cenário e propor a solução mais segura e eficiente.
          </p>
          <a
            href="/contato"
            className="inline-flex justify-center items-center w-full px-4 py-2 rounded-lg bg-amber-400 text-slate-950 text-sm font-semibold hover:bg-amber-300 transition-colors"
          >
            Solicitar contato técnico
          </a>
          <p className="text-[11px] text-slate-400">
            Atendimento 24h • comercial@grupodelta.ind.br
          </p>
        </div>
      </section>
    </main>
  );
}
