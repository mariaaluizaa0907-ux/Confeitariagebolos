import React from 'react';
import { Cake, Cookie, Coffee, Gift } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Cake className="h-10 w-10" />,
      title: "Bolos Personalizados",
      description: "Bolos únicos para suas celebrações especiais, com sabores irresistíveis e decorações exclusivas que tornam cada momento inesquecível.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: <Cookie className="h-10 w-10" />,
      title: "Doces Finos",
      description: "Brigadeiros gourmet, beijinhos, cajuzinhos e muito mais, feitos com ingredientes selecionados e muito carinho.",
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: <Coffee className="h-10 w-10" />,
      title: "Tortas & Sobremesas",
      description: "Tortas cremosas, mousses deliciosas e sobremesas que derretem na boca, criadas para encantar seus sentidos.",
      image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: <Gift className="h-10 w-10" />,
      title: "Kits Presente",
      description: "Cestas e kits especiais para presentear quem você ama com nossos doces artesanais e todo nosso carinho.",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-serif text-amber-900 mb-8 font-light">Nossos Produtos</h2>
          <p className="text-3xl text-amber-700 max-w-5xl mx-auto font-light italic leading-relaxed">
            Cada criação é uma obra de arte que desperta os sentidos e toca o coração
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-8 shadow-xl">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center text-amber-700 group-hover:from-amber-700 group-hover:to-amber-800 group-hover:text-white transition-all duration-300 shadow-lg">
                    {product.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-amber-900 mb-4 font-light">{product.title}</h3>
                <p className="text-amber-700 leading-relaxed font-light italic text-lg">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-12 py-5 rounded-full font-serif text-xl hover:from-amber-800 hover:to-amber-900 transition-all shadow-xl transform hover:scale-105">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;