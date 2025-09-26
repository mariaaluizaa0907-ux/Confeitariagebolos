import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/IMG_20250923_154745.jpg" 
              alt="Bolos Gourmet" 
              className="h-16 w-16 object-contain rounded-full"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-serif text-amber-900 font-light">Bolos Gourmet</h1>
              <p className="text-sm text-amber-700 font-light italic">Confeitaria Artesanal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light text-lg">Início</a>
            <a href="#products" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light text-lg">Produtos</a>
            <a href="#about" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light text-lg">Sobre</a>
            <a href="#contact" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light text-lg">Contato</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-amber-800 font-light">
              <Mail className="h-4 w-4 mr-2" />
              <span>gvrocha1977@gmail.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-amber-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light">Início</a>
              <a href="#products" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light">Produtos</a>
              <a href="#about" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light">Sobre</a>
              <a href="#contact" className="text-amber-800 hover:text-amber-900 transition-colors font-serif font-light">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;