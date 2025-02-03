export const About = () => {
  return (
    <section className="body-font bg-[#644EF5] text-assets dark:bg-slate-900">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row-reverse flex-col-reverse items-center">
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-2xl font-sen font-extrabold leading-9 tracking-tight mb-3 text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Sobre <span className="text-colorSecondary">Mim</span>
          </h1>
          <h2 className="text-2xl font-inter font-extrabold leading-9 tracking-tight mb-3 text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-2xl md:leading-normal">
            Desenvolvedor Full Stack | UX UI Designer
          </h2>
          <p className="mb-8 font-inter font-extrabold md:pl-0 px-2">
            Sou um desenvolvedor full stack com experiência em React, Next.js,
            TypeScript, Tailwind, Node.js e SQL. Tenho conhecimento em UX/UI
            Design, crio interfaces funcionais e intuitivas. Meu foco é
            desenvolver soluções eficientes e otimizadas, sempre buscando
            inovação e aprimoramento contínuo. 🚀
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex text-assets hover:bg-transparent border-transparent bg-colorSecondary border-2 hover:border-colorSecondary transition duration-300 ease-in py-2 px-6 focus:outline-none rounded-xl text-lg shadow-2xl font-bold font-roboto"
            >
              Saiba mais
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-4/6">
          <div className="w-full relative mt-12 md:mt-0">
            <img
              className="relative z-10 rounded-full max-w-[65%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-colorSecondary"
              src="/img/profile.png"
              alt="My Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
