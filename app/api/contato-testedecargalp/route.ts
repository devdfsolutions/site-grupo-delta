import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const nome = String(form.get("nome") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const telefone = String(form.get("telefone") ?? "").trim();
    const empresa = String(form.get("empresa") ?? "").trim();

    if (!nome || !email) {
      return NextResponse.redirect(
        new URL("/testedecargalp/#form-orcamento", req.url),
        302
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Site Grupo Delta <no-reply@grupodelta.ind.br>";

    const toEmail =
      process.env.CONTACT_TO_EMAIL ||
      "comercial@grupodelta.ind.br,contato@bluerocketdigital.com.br";

    const assunto = "Nova mensagem do site - Formulário de Contato (Landing Teste de Carga)";

    const html = `
      <h2>Nova mensagem recebida pela landing (Teste de Carga)</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone || "-"}</p>
      <p><strong>Empresa:</strong> ${empresa || "-"}</p>
      <hr>
      <p>Enviado em: ${new Date().toLocaleString("pt-BR")}</p>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail.split(",").map((s) => s.trim()).filter(Boolean),
      subject: assunto,
      replyTo: email,
      html,
    });

    return NextResponse.redirect(
      new URL("/testedecargalp/mensagemenviada.html", req.url),
      302
    );
  } catch (err) {
    console.error("Erro contato-testedecargalp:", err);
    return NextResponse.redirect(
      new URL("/testedecargalp/#form-orcamento", req.url),
      302
    );
  }
}
