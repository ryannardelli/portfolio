import { CardService } from "../CardService";

export const ServiceProfessional = () => {
  return (
    <div className="h-auto lg:h-screen xl:h-screen 2xl:h-screen flex flex-col justify-center items-center gap-8 p-14">
      <div>
        <h1 className="text-2xl font-sen font-extrabold leading-9 tracking-tight text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal text-center">
          Meus <span className="text-colorSecondary">Serviços</span>
        </h1>
      </div>
      <CardService />
    </div>
  );
};
