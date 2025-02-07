"use client";

interface AlertSuccesProp {
    show: boolean
}
export const AlertSucces = ({show}: AlertSuccesProp) => {
    if(!show) return null;
  return (
    <div className="fixed inset-x-0 top-0 flex items-end justify-right px-4 py-6 justify-end z-50">
      <div className="max-w-sm w-full shadow-lg px-4 py-3 rounded relative bg-green-400 border-l-4 border-green-700 text-white">
        <div className="p-2">
          <div className="flex items-start">
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm leading-5 font-medium">
                Sua mensagem foi recebida com sucesso! Responderei assim que
                possível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
