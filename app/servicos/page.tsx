// app/servicos/page.tsx
export default function ServicosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Serviços</h1>
      <p className="text-sm md:text-base text-slate-300">
        Nossas soluções são estruturadas para atender às demandas de navios,
        plataformas, estaleiros e unidades industriais onshore.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-slate-800 rounded-xl p-4 space-y-2">
          <h2 className="font-semibold">Testes de carga</h2>
          <p className="text-xs text-slate-300">
            Ensaios estáticos e dinâmicos, com emissão de certificados e laudos
            conforme requisitos de sociedades classificadoras e normas vigentes.
          </p>
        </div>
        <div className="border border-slate-800 rounded-xl p-4 space-y-2">
          <h2 className="font-semibold">LSA / Salvatagem</h2>
          <p className="text-xs text-slate-300">
            Inspeções, manutenção e reparos em botes, guinchos, turcos e
            equipamentos de salvatagem.
          </p>
        </div>
        <div className="border border-slate-800 rounded-xl p-4 space-y-2">
          <h2 className="font-semibold">Inspeções técnicas</h2>
          <p className="text-xs text-slate-300">
            Inspeções de equipamentos, estruturas e dispositivos de içamento,
            com relatórios técnicos detalhados.
          </p>
        </div>
        <div className="border border-slate-800 rounded-xl p-4 space-y-2">
          <h2 className="font-semibold">Locação e MRO</h2>
          <p className="text-xs text-slate-300">
            Locação de equipamentos e soluções em manutenção, reparo e
            operação, otimizando custos e disponibilidade.
          </p>
        </div>
      </div>
    </main>
  );
}
