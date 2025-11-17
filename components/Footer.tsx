// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs md:text-sm text-slate-300 flex flex-col md:flex-row gap-4 justify-between">
        <div className="space-y-1">
          <div className="font-semibold text-slate-100">
            Grupo Delta
          </div>
          <div>Excelência em Soluções Offshore e Onshore.</div>
          <div>CNPJ: 00.000.000/0000-00 {/* ajustar se quiser */}</div>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-slate-100">Contato</div>
          <div>E-mail: comercial@grupodelta.ind.br</div>
          <div>Telefone: (21) XXXX-XXXX {/* ajustar */}</div>
          <div>Atendimento 24h • Rio de Janeiro / Duque de Caxias</div>
        </div>
        <div className="space-y-1">
          <div className="font-semibold text-slate-100">Endereço</div>
          <div>Endereço oficial da base da Delta</div>
          <div>Rio de Janeiro - RJ</div>
        </div>
      </div>
      <div className="border-t border-slate-900 text-[10px] md:text-xs text-center text-slate-500 py-3">
        © {new Date().getFullYear()} Grupo Delta. Todos os direitos reservados.
      </div>
    </footer>
  );
}
