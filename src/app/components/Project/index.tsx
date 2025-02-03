import { CardProject } from "../CardProject";
export const Project = () => {
  return (
    <div className="bg-[#644EF5]">
      <div>
        <h1 className="text-2xl font-sen font-extrabold leading-9 tracking-tight mb-3 text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal text-center py-12">
          Meus <span className="text-colorSecondary">Projetos</span>
        </h1>
      </div>
      <CardProject />
    </div>
  );
};
