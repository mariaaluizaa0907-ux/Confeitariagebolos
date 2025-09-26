import React from 'react';
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/IMG_20250923_154745.jpg" 
                alt="Bolos Gourmet" 
                className="h-16 w-16 object-contain rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-serif font-light">Bolos Gourmet</h3>
                <p className="text-amber-200 font-light italic">Confeitaria Artesanal</p>
              </div>
            </div>
            <p className="text-amber-100 leading-relaxed text-lg font-light italic">
              Doces artesanais que transformam momentos em memórias especiais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-serif mb-6 font-light">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-amber-200 hover:text-white transition-colors text-lg font-light">Início</a></li>
              <li><a href="#products" className="text-amber-200 hover:text-white transition-colors text-lg font-light">Produtos</a></li>
              <li><a href="#about" className="text-amber-200 hover:text-white transition-colors text-lg font-light">Sobre</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors text-lg font-light">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-serif mb-6 font-light">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-amber-300" />
                <span className="text-amber-200 text-lg font-light">gvrocha1977@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-serif mb-4 text-xl font-light">Siga-nos</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors shadow-lg">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-12 pt-8 text-center">
          <p className="text-amber-200 flex items-center justify-center text-lg font-light">
            © 2024 Bolos Gourmet. Feito com 
            <Heart className="h-5 w-5 mx-2 text-amber-400" />
            para você.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;