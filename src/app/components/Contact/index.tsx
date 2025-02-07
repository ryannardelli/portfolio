import { Form } from "../Form";
export const Contact = ({
  setShowAlert,
}: {
  setShowAlert: (show: boolean) => void;
}) => {
  return (
    <section className="relative" id="contact">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="mb-4 font-sen text-3xl md:text-5xl text-white sm:text-3xl font-bold">
            Fale <span className="text-colorSecondary">Comigo</span>
          </h1>
        </div>
        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <Form setShowAlert={setShowAlert} />
        </div>
      </div>
    </section>
  );
};
