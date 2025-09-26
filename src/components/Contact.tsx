import React from 'react';
import { Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-serif text-amber-900 mb-8 font-light">Entre em Contato</h2>
          <p className="text-3xl text-amber-700 max-w-5xl mx-auto font-light italic leading-relaxed">
            Vamos criar juntos o doce perfeito para seu momento especial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-4xl font-serif text-amber-900 mb-10 font-light">Informações de Contato</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="h-8 w-8 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-serif text-amber-900 mb-2 text-2xl font-light">Email</h4>
                  <p className="text-amber-700 text-lg font-light">gvrocha1977@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageCircle className="h-8 w-8 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-serif text-amber-900 mb-2 text-2xl font-light">WhatsApp</h4>
                  <p className="text-amber-700 text-lg font-light">Entre em contato pelo WhatsApp para pedidos</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Clock className="h-8 w-8 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-serif text-amber-900 mb-2 text-2xl font-light">Horário de Atendimento</h4>
                  <p className="text-amber-700 text-lg font-light">Segunda a Sábado: 8h às 18h</p>
                  <p className="text-amber-700 text-lg font-light">Domingo: 8h às 14h</p>
                </div>
              </div>
            </div>

            {/* PIX QR Code */}
            <div className="mt-16 p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl shadow-xl">
              <h4 className="text-3xl font-serif text-amber-900 mb-6 text-center font-light">Pagamento via PIX</h4>
              <div className="flex justify-center mb-6">
                <img 
                  src="/qr code.jpg" 
                  alt="QR Code PIX" 
                  className="w-56 h-56 object-contain rounded-2xl shadow-xl bg-white p-4"
                />
              </div>
              <p className="text-center text-amber-700 text-lg font-light italic mb-3">
                Escaneie o QR Code para pagamentos via PIX
              </p>
              <p className="text-center text-amber-800 font-serif text-xl font-light">
                gvrocha1977@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-4xl font-serif text-amber-900 mb-10 font-light">Faça seu Pedido</h3>
            
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-serif text-amber-800 mb-3 font-light">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg font-light"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-serif text-amber-800 mb-3 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg font-light"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-serif text-amber-800 mb-3 font-light">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg font-light"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-lg font-serif text-amber-800 mb-3 font-light">
                  Produto Desejado
                </label>
                <select
                  id="product"
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg font-light"
                >
                  <option value="">Selecione um produto</option>
                  <option value="bolo-personalizado">Bolo Personalizado</option>
                  <option value="doces-finos">Doces Finos</option>
                  <option value="tortas">Tortas & Sobremesas</option>
                  <option value="kit-presente">Kit Presente</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-serif text-amber-800 mb-3 font-light">
                  Detalhes do Pedido
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-amber-300 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-lg font-light"
                  placeholder="Descreva seu pedido, sabores desejados, data do evento, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white py-5 rounded-2xl font-serif text-xl hover:from-amber-800 hover:to-amber-900 transition-all shadow-xl transform hover:scale-105 font-light"
              >
                Enviar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;