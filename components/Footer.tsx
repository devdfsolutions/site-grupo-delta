// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL_PT =
  "https://api.whatsapp.com/send/?phone=5521986560236&text=Ol%C3%A1%21+Encontrei+a+empresa+de+voc%C3%AAs+no+Google+e+tenho+interesse+em+conhecer+melhor+os+servi%C3%A7os.&type=phone_number&app_absent=0";

const WHATSAPP_URL_EN =
  "https://api.whatsapp.com/send/?phone=5521986560236&text=Hello%21+I+found+your+company+on+Google+and+I%27d+like+to+learn+more+about+your+services.&type=phone_number&app_absent=0";

type FooterProps = {
  lang?: "pt" | "en";
};

export default function Footer({ lang = "pt" }: FooterProps) {
  const year = new Date().getFullYear();
  const isEN = lang === "en";

  const WHATSAPP_URL = isEN ? WHATSAPP_URL_EN : WHATSAPP_URL_PT;

  return (
    <footer className="bg-[#1c2743] text-slate-100">
      {/* main block */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-3">
        {/* Logo left + text right */}
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
                {isEN ? (
                  <>
                    <p>Turning challenges into solutions!</p>
                    <p>Delta Solutions is a reference in engineering services.</p>
                  </>
                ) : (
                  <>
                    <p>Transformando desafios em soluções!</p>
                    <p>A Delta Soluções é referência em serviços de engenharia.</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Social links */}
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

        {/* Useful areas */}
        <div className="space-y-2 text-sm">
          <h3 className="font-semibold tracking-wide uppercase text-slate-100">
            {isEN ? "Useful links" : "Áreas úteis"}
          </h3>
          <ul className="space-y-1 text-slate-300">
            <li>
              <Link
                href={isEN ? "/home" : "/"}
                className="hover:text-[#3eb1f9] transition-colors"
              >
                {isEN ? "Home" : "Início"}
              </Link>
            </li>
            <li>
              <Link
                href={isEN ? "/about" : "/sobre"}
                className="hover:text-[#3eb1f9] transition-colors"
              >
                {isEN ? "About us" : "Sobre nós"}
              </Link>
            </li>
            <li>
              <Link
                href={isEN ? "/services" : "/servicos"}
                className="hover:text-[#3eb1f9] transition-colors"
              >
                {isEN ? "Services" : "Serviços"}
              </Link>
            </li>
            <li>
              <Link
                href={isEN ? "/contact" : "/contato"}
                className="hover:text-[#3eb1f9] transition-colors"
              >
                {isEN ? "Contact" : "Contato"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Phones + Email */}
        <div className="space-y-3 text-sm">
          <div>
            <h3 className="font-semibold tracking-wide uppercase text-slate-100">
              {isEN ? "Phones" : "Telefones"}
            </h3>
            <div className="mt-2 space-y-1 text-slate-300">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[#3eb1f9] transition-colors"
              >
                (21) 98656-0236 {isEN ? "(24/7)" : "(24 horas)"}
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
                href={isEN ? "/contact" : "/contato"}
                className="hover:text-[#3eb1f9] transition-colors"
              >
                comercial@grupodelta.ind.br
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="bg-[#141b30] border-t border-slate-800 text-[10px] md:text-xs text-center text-slate-400 py-3">
        © {year}{" "}
        {isEN ? "Developed by DF Solutions." : "Desenvolvido por DF Solutions."}
      </div>
    </footer>
  );
}
