// app/page.tsx
export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400">
            Atuamos em todo o Brasil
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Testes de Carga e Engenharia com excelência e segurança.
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            O Grupo Delta oferece soluções completas em testes de carga,
            inspeções, manutenção e salvatagem, com foco em segurança,
            conformidade e disponibilidade operacional para ativos offshore e onshore.
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
              className="px-4 py-2 rounded-lg border border-slate-700 text-sm hover:border-amber-300 hover:text-amber-300 transition-colors"
            >
              Conheça nossos serviços
            </a>
          </div>
        </div>
        <div className="h-56 md:h-72 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-sm text-slate-300">
          {/* Aqui depois colocamos uma imagem da sua base / operação */}
          Área para imagem / banner da Delta
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Principais serviços</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-slate-800 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-sm">Testes de carga</h3>
            <p className="text-xs text-slate-300">
              Execução de testes de carga estáticos e dinâmicos com emissão de
              certificados conforme normas internacionais.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-sm">LSA / Salvatagem</h3>
            <p className="text-xs text-slate-300">
              Manutenção e inspeção de embarcações de salvamento, guinchos,
              turcos e equipamentos de vida.
            </p>
          </div>
          <div className="border border-slate-800 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-sm">Inspeções e engenharia</h3>
            <p className="text-xs text-slate-300">
              Inspeções técnicas, engenharia aplicada e suporte à integridade de
              ativos offshore e onshore.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
