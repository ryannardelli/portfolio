import { CardProject } from "../CardProject";
export const Project = () => {
  return (
    <div className="bg-[#644EF5] p-0 md:p-14" id="project">
      <div>
        <h1 className="text-2xl font-sen font-extrabold leading-9 tracking-tight text-assets dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal text-center mb-4 py-8 md:py-0">
          Meus <span className="text-colorSecondary">Projetos</span>
        </h1>
      </div>
      <CardProject />
    </div>
  );
};
