export const CardProject = () => {
  return (
    <div className="font-roboto">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          <a href="https://ryannardelli.github.io/e-commerce/" target="_blank" className="block">
            <div className="cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img
                src="https://readwrite.com/wp-content/uploads/2021/06/Artificial-Intelligence-in-Ecommerce.jpg"
                alt="ecommerce"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-colorSecondary opacity-90">
                <h3 className="text-xl font-bold text-assets">E-commerce</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-assets text-sm">
                    E-commerce de moda com design moderno, de fácil navegação e
                    experiência de compra otimizada.
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://ryannardelli.github.io/quickconvert/" target="_blank" className="block"> 
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img
                src="https://ebookcult.com.br/wp-content/uploads/2023/04/Como-funciona-um-conversor-de-moeda.jpg"
                alt="conversor de moeda"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-colorSecondary opacity-90">
                <h3 className="text-xl font-bold text-assets">
                  Conversor de Moedas
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-assets text-sm">
                    Conversor de Moedas feito no intuito de auxiliar na conversão
                    de moedas estrangeiras.
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://merry-nasturtium-211ff4.netlify.app/" target="_blank" className="block">
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img
                src="https://readymadeui.com/images/food22.webp"
                alt="landing page"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-colorSecondary opacity-90">
                <h3 className="text-xl font-bold text-assets">Landing Page</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-assets text-sm">
                    Landing Page com Designer elegante de um restaurante de venda
                    de comidas.
                  </p>
                </div>
              </div>
            </div>         
          </a>

          <a href="https://squad05-portodigital.github.io/Front-end/" target="_blank" className="block">
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img
                src="https://tchelete.com/wp-content/uploads/2023/07/chatbot-development-with-deep-nlp-1024x1024.png"
                alt="Chatbot"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-colorSecondary opacity-90">
                <h3 className="text-xl font-bold text-assets">ChatBot</h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-assets text-sm">
                    ChatBot desenvolvido, em parceria da empresa de tecnologia
                    GetInfo, para solucionar problema do RH.
                  </p>
                </div>
              </div>
            </div>      
          </a>
          <a href="https://marvelous-phoenix-5213f9.netlify.app/" target="_blank" className="block">
            <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
              <img
                src="https://www.passeios.org/wp-content/uploads/2024/03/voucher-de-viagem.jpg"
                alt="Planejador de viagem"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 absolute bottom-0 left-0 right-0 bg-colorSecondary opacity-90">
                <h3 className="text-xl font-bold text-assets">
                  Planejador de Viagem
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                  <p className="text-assets text-sm">
                    Aplicação web desenvolvida para auxiliar pessoas nas suas
                    viagens, prevendo o clima dos próximos dias, para não haver
                    imprevistos.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
