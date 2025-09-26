import React from 'react';
import { Heart, Star, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div>
            <h2 className="text-6xl lg:text-8xl font-serif text-amber-900 mb-8 leading-tight font-light">
              Doces que
              <span className="text-amber-800 block italic font-light">Encantam</span>
            </h2>
            <p className="text-3xl text-amber-700 mb-12 leading-relaxed font-light italic max-w-5xl mx-auto">
              Sabores únicos que despertam sorrisos e criam memórias doces para toda vida
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <button className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-12 py-5 rounded-full font-serif text-xl hover:from-amber-800 hover:to-amber-900 transition-all shadow-xl transform hover:scale-105">
                Ver Produtos
              </button>
              <button className="border-2 border-amber-700 text-amber-700 px-12 py-5 rounded-full font-serif text-xl hover:bg-amber-700 hover:text-white transition-all transform hover:scale-105">
                Fazer Pedido
              </button>
            </div>

            <div className="flex justify-center space-x-16">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-6 shadow-lg">
                  <Heart className="h-10 w-10 text-amber-700" />
                </div>
                <p className="text-xl font-serif text-amber-800 font-light">Feito com Amor</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-6 shadow-lg">
                  <Sparkles className="h-10 w-10 text-amber-700" />
                </div>
                <p className="text-xl font-serif text-amber-800 font-light">Momentos Especiais</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mb-6 shadow-lg">
                  <Award className="h-10 w-10 text-amber-700" />
                </div>
                <p className="text-xl font-serif text-amber-800 font-light">Artesanal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30 blur-xl"></div>
    </section>
  );
};

export default Hero;