// import { useEffect } from "react";
// import Typed from "typed.js";

export const HeroPrinciple = () => {
  // useEffect(() => {
  //     const typed = new Typed(".typing", {
  //         strings: [
  //             "FullStack Developer",
  //             "Frontend Developer",
  //             "Backend Developer",
  //             "Mobile Apps Developer"
  //         ],
  //         typeSpeed: 100,
  //         backSpeed: 60,
  //         loop: true
  //     });

  //     return () => typed.destroy(); // Limpa a instância ao desmontar o componente
  // }, []);

  return (
    <div className="h-full w-full mx-auto relative top-12 pb-20 xl:px-40 px-8 flex md:flex-row-reverse flex-col gap-4 justify-center items-center pt-4">
      <div className="w-full relative">
        <div className="relative z-10 bg-colorSecondary rounded-full mx-auto overflow-hidden md:w-[400px] md:h-[400px] shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src="/img/profile.png"
            alt="My Image"
          />
        </div>
      </div>

      {/* <div className="w-full relative">
        <img
          className="relative z-10 rounded-full max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-colorSecondary"
          src="/img/profile.png"
          alt="My Image"
        />
      </div> */}

      <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4 font-sen">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif lg:w-2/4">
          Olá, me chamo{" "}
          <span className="text-5xl text-nowrap">Ryan Nardelli</span>
        </h1>
        <h3 className="capitalize text-rose-400">
          Im <span className="typing text-green-500 dark:text-green-700"></span>
        </h3>
        <p>
          Desenvolvedor Full Stack e UX UI Designer apaixonado por criar
          soluções web eficientes e intuitivas.
        </p>
        <div className="sm:mt-4 mt-2">
          <button className="px-6 py-1 bg-colorSecondary rounded-md text-white rounded-sm">
            Dowload CV
          </button>
        </div>
      </div>
    </div>
  );
};
