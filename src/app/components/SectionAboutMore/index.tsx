export const SectionAboutMore = () => {
  return (
    <div className="w-full h-screen bg-colorPrimary font-roboto">
      <div className="md:h-1/3 sm:h-[20%] h-[16%] md:w-[80%] sm:w-[90%] mx-auto bg-[#644EF5]"></div>
      <div className="relative md:w-[70%] w-[80%] mx-auto">
        <div className="absolute md:-top-[7rem] -top-[4rem] flex flex-col items-center">
          <img
            className="md:w-[24rem] sm:w-[16rem] w-[10rem] object-center"
            src="https://tse3.explicit.bing.net/th?id=OIP.yts3lbfle7hyy6Qp70LDJQHaD3&pid=Api&P=0&h=180"
            alt="Profile"
          />
          <h2 className="sm:text-5xl text-3xl font-serif mt-10 text-center">
            Pronto para trabalhar comigo?
          </h2>
          <p className="text-center md:text-lg mt-6 font-semibold">
            Criar experiências digitais eficientes e inovadoras é minha paixão.
            Combinando design intuitivo e código otimizado, desenvolvo soluções
            que agregam valor e impactam positivamente usuários e negócios.
            Vamos transformar ideias em realidade juntos!
          </p>

          <div className="relative inline-flex group mt-8">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-colorSecondary to-colorSecondary rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="mailto:ryannardelli12@gmail.com"
              title="Contact Now"
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-assets transition-all duration-200 bg-colorSecondary font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-colorSecondary"
              role="button"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutMore;
