import React from 'react';
import { Heart, Sparkles, Award, Star } from 'lucide-react';

const About = () => {
  const values = [
    { 
      icon: <Heart className="h-10 w-10" />, 
      title: "Amor em Cada Receita", 
      description: "Ingredientes selecionados com carinho e dedicação especial" 
    },
    { 
      icon: <Sparkles className="h-10 w-10" />, 
      title: "Momentos Únicos", 
      description: "Criações que marcam sua vida e despertam sorrisos" 
    },
    { 
      icon: <Award className="h-10 w-10" />, 
      title: "Qualidade Artesanal", 
      description: "Tradição e inovação em perfeita harmonia" 
    },
    { 
      icon: <Star className="h-10 w-10" />, 
      title: "Sabores Inesquecíveis", 
      description: "Experiências que tocam a alma e aquecem o coração" 
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl font-serif text-amber-900 mb-10 font-light">
              Paixão que se Transforma em Doçura
            </h2>
            <p className="text-3xl text-amber-700 mb-10 leading-relaxed font-light italic">
              Transformamos ingredientes especiais em memórias afetivas que aquecem o coração
            </p>
            <p className="text-2xl text-amber-600 mb-16 leading-relaxed font-light">
              Cada doce é uma celebração da vida, criado com técnicas artesanais e o toque especial do amor
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
              {values.map((value, index) => (
                <div key={index} className="text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-amber-700 shadow-lg">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-amber-900 mb-4 font-light">{value.title}</h3>
                  <p className="text-amber-700 font-light italic text-lg leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;