// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+empresa+de+voc%C3%AAs+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c2743] text-slate-100">
      {/* bloco principal */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-3">
        {/* Logo à esquerda + texto à direita */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative w-32 h-24 md:w-40 md:h-28">
              <Image
                src="/img/logodeltabranca1.png"
                alt="Grupo Delta"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-1 text-sm">
              <div className="text-xs text-slate-300 space-y-1">
                <p>Transformando desafios em soluções!</p>
                <p>A Delta Soluções é referência em serviços de engenharia.</p>
              </div>
            </div>
          </div>

          {/* Redes sociais atualizadas */}
          <div className="flex gap-6 pt-2 text-xs text-slate-300">
            <a
              href="https://www.instagram.com/deltagroupsafety/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border border-slate-300/40 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <Image
                src="/img/instagram1.png"
                alt="Instagram"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>

            <a
              href="https://www.facebook.com/DeltaSolucoesEngenharia"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border border-slate-300/40 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <Image
                src="/img/facebook1.png"
                alt="Facebook"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/delta-solu-es-engenharia/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md border border-slate-300/40 flex items-center justify-center hover:bg-slate-100 transition-colors"
            >
              <Image
                src="/img/linkedin1.png"
                alt="LinkedIn"
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Coluna “Áreas úteis” */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold tracking-wide uppercase text-slate-100">
            Áreas úteis
          </h3>
          <ul className="space-y-1 text-slate-300">
            <li>
              <Link href="/" className="hover:text-[#3eb1f9] transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="hover:text-[#3eb1f9] transition-colors"
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="hover:text-[#3eb1f9] transition-colors"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="hover:text-[#3eb1f9] transition-colors"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Telefones + Email */}
        <div className="space-y-3 text-sm">
          <div>
            <h3 className="font-semibold tracking-wide uppercase text-slate-100">
              Telefones
            </h3>
            <div className="mt-2 space-y-1 text-slate-300">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[#3eb1f9] transition-colors"
              >
                (21) 98656-0236 (24 horas)
              </a>

              <a
                href="tel:+5521995303032"
                className="block hover:text-[#3eb1f9] transition-colors"
              >
                (21) 99530-3032
              </a>
              <a
                href="tel:+552134915335"
                className="block hover:text-[#3eb1f9] transition-colors"
              >
                (21) 3491-5335
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold tracking-wide uppercase text-slate-100">
              Email
            </h3>
            <div className="mt-2 space-y-1 text-slate-300">
              <Link
                href="/contato"
                className="hover:text-[#3eb1f9] transition-colors"
              >
                comercial@grupodelta.ind.br
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barra final */}
      <div className="bg-[#141b30] border-t border-slate-800 text-[10px] md:text-xs text-center text-slate-400 py-3">
        © {year} Desenvolvido por DF Solutions.
      </div>
    </footer>
  );
}
