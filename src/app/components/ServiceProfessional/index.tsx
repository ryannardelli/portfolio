import { CardService } from "../CardService";

export const ServiceProfessional = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-sen font-extrabold leading-9 tracking-tight mb-3 text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal text-center py-8">
          Meus <span className="text-colorSecondary">Serviços</span>
        </h1>
      </div>
      <CardService />;
    </>
  );
};
