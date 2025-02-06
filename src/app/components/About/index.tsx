export const About = () => {
  return (
    <section
      className="body-font bg-[#644EF5] text-assets p-0 md:p-14"
      id="about"
    >
      <div className="container mx-auto flex md:px-24 md:py-10 flex-col-reverse md:flex-col-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse items-center">
        <div className="lg:flex-grow mt-5 md:mt-0 lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl font-sen font-extrabold leading-9 tracking-tight mb-3 text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Sobre <span className="text-colorSecondary">Mim</span>
          </h1>
          <h2 className="text-2xl font-inter font-extrabold leading-9 tracking-tight mb-3 text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-normal">
            Desenvolvedor Full Stack | UX UI Designer
          </h2>
          <p className="mb-8 font-inter font-extrabold md:pl-0 px-0 md:px-2">
            Sou um desenvolvedor full stack com experiência em React, JavaScript
            Next.js, TypeScript, Tailwind, Node.js e SQL. Tenho conhecimento em
            UX/UI Design, crio interfaces funcionais e intuitivas. Meu foco é
            desenvolver soluções eficientes e otimizadas, sempre buscando
            inovação e aprimoramento contínuo. 🚀
          </p>
          <div>
            <div className="relative inline-flex group">
              <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-colorSecondary via-colorSecondary to-colorSecondary blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <a
                href="/knowmore"
                className="relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-assets transition-all duration-200 bg-colorSecondary font-roboto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-xl"
                role="button"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-4/6">
          <div className="w-full relative mt-12 md:mt-0 mb-0 md:mb-5 lg:mb-0">
            <img
              className="relative z-10 rounded-full lg:max-w-[65%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-colorSecondary"
              src="/img/profile.png"
              alt="My Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
