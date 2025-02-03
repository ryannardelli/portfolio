import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles.css";

export const CardService = () => {
  return (
    <div className="features">
      <div className="feature">
        <i className="feature-icon fas fa-code"></i>
        <h3 className="feature-title">Desenvolvimento Web</h3>
        <p className="feature-description">
          Criação de WebSites personalizados de acordo com a sua necessidade.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="inline-flex text-assets bg-colorPrimary hover:bg-[#644EF5] transition duration-300 ease-in py-2 px-6 focus:outline-none rounded-xl text-lg shadow-2xl font-bold font-roboto"
          >
            Ver mais
          </a>
        </div>
      </div>
      <div className="feature">
        <i className="feature-icon fas fa-palette"></i>
        <h3 className="feature-title">Web Design e UX/UI</h3>
        <p className="feature-description">
          Crio Layouts e protótipos modernos, responsivos e focados na
          experiência do usuário.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="inline-flex text-assets bg-colorPrimary hover:bg-[#644EF5] transition duration-300 ease-in py-2 px-6 focus:outline-none rounded-xl text-lg shadow-2xl font-bold font-roboto"
          >
            Ver mais
          </a>
        </div>
      </div>
      <div className="feature">
        <i className="feature-icon fas fa-tools"></i>
        <h3 className="feature-title">Manutenção e Performance</h3>
        <p className="feature-description">
          Realizo Atualizações, correções e segurança para manter seu site
          funcional.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="inline-flex text-assets bg-colorPrimary hover:bg-[#644EF5] transition duration-300 ease-in py-2 px-6 focus:outline-none rounded-xl text-lg shadow-2xl font-bold font-roboto"
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
};
