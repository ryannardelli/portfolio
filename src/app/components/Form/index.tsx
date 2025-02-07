"use client";
import { handleSubmit } from "../../utils/handleSubmit";
import { useState } from "react";

export const Form = ({ setShowAlert }: { setShowAlert: (show: boolean) => void }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form
      className="-m-2 flex flex-wrap"
      action="https://api.staticforms.xyz/submit"
      method="POST"
      onSubmit={(event) => handleSubmit(event, setErrors, setShowAlert)}
    >
      <input
        type="hidden"
        name="accessKey"
        value="b2bbbb43-a468-41f7-b926-decd407e8461"
      ></input>
      <div className="w-1/2 p-2">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
            placeholder="Name"
          />
          <label
            htmlFor="name"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Nome
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">{errors.name}</p>
        )}
      </div>
      <div className="w-1/2 p-2">
        <div className="relative">
          <input
            type="text"
            id="surname"
            name="surname"
            className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
            placeholder="Surname"
          />
          <label
            htmlFor="surname"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Sobrenome
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">{errors.surname}</p>
        )}
      </div>
      <div className="w-1/2 p-2">
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
            placeholder="Phone"
          />
          <label
            htmlFor="phone"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Telefone
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">{errors.phone}</p>
        )}
      </div>
      <div className="w-1/2 p-2">
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Email
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">{errors.email}</p>
        )}
      </div>
      <div className="mt-4 w-full p-2">
        <div className="relative">
          <textarea
            id="message"
            name="message"
            className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
            placeholder="Message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
          >
            Mensagem
          </label>
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">{errors.message}</p>
        )}
      </div>
      <div className="w-full p-2">
        <button
          type="submit"
          className="mx-auto flex rounded bg-colorSecondary py-2 px-8 text-lg text-white focus:outline-none border-2 border-transparent hover:border-colorSecondary hover:bg-transparent transition-all duration-500"
        >
          Enviar
        </button>
      </div>
      {/* <input
        type="hidden"
        name="redirectTo"
        value="http://localhost:3000/"
      ></input> */}
    </form>
  );
};
