
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-900/80 text-white/80 py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CateClub</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="hover:text-primary transition-colors">Sobre nós</Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors">Contato</Link>
              </li>
              <li>
                <Link to="/ajuda" className="hover:text-primary transition-colors">Ajuda</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Pais</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/controle-parental" className="hover:text-primary transition-colors">Controle Parental</Link>
              </li>
              <li>
                <Link to="/seguranca" className="hover:text-primary transition-colors">Segurança</Link>
              </li>
              <li>
                <Link to="/assinatura" className="hover:text-primary transition-colors">Assinatura</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categorias/biblia" className="hover:text-primary transition-colors">Histórias da Bíblia</Link>
              </li>
              <li>
                <Link to="/categorias/jesus" className="hover:text-primary transition-colors">Sobre Jesus</Link>
              </li>
              <li>
                <Link to="/categorias/aprender" className="hover:text-primary transition-colors">Aprender Brincando</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} CateClub. Todos os direitos reservados.</p>
          <p className="mt-2">Uma plataforma segura para crianças conhecerem a palavra de Deus.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
