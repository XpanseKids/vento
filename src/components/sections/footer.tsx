import { Link } from "@tanstack/react-router";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-bold text-emerald-light">
              Vento
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Automação de atendimento e comunicação via WhatsApp para clínicas
              e consultórios. Reduzimos no-shows e devolvemos tempo para sua
              equipe.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Produtos</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#solucoes" className="hover:text-white">
                  Automação Anti No-Show
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white">
                  Site e Formulário Próprio
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white">
                  Reativação Semestral
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white">
                  Páginas de Portfólio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a href="#como-funciona" className="hover:text-white">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white">
                  Simulador
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contato@vento.com.br
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Vento. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            <Link to="/" className="hover:text-white">
              Política de Privacidade
            </Link>
            <span className="mx-2">·</span>
            <Link to="/" className="hover:text-white">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
