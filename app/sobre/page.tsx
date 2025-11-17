// app/sobre/page.tsx
export default function SobrePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Sobre o Grupo Delta</h1>
      <p className="text-sm md:text-base text-slate-300">
        O Grupo Delta é especializado em soluções de engenharia, manutenção,
        inspeções e testes de carga, atuando em unidades offshore e onshore em
        todo o território nacional.
      </p>
      <p className="text-sm md:text-base text-slate-300">
        Com equipe multidisciplinar e experiência comprovada em ambientes de
        alta criticidade, entregamos segurança, conformidade às normas e
        disponibilidade operacional para nossos clientes.
      </p>
      {/* Aqui depois a gente cola o texto completo da página "Sobre" do WP */}
    </main>
  );
}
