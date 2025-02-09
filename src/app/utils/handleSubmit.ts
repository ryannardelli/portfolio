import { FormEvent } from "react";

export const handleSubmit = async (
  event: FormEvent<HTMLFormElement>,
  setErrors: (errors: Record<string, string>) => void,
  setShowAlert: (show: boolean) => void,
) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const errors: Record<string, string> = {};

  if (!data.name) errors.name = "O nome é obrigatório";
  if (!data.surname) errors.surname = "O sobrenome é obrigatório";
  if (!data.email) errors.email = "O e-mail é obrigatório";
  if (!data.phone) errors.phone = "O telefone é obrigatório";
  if (!data.message) errors.message = "A mensagem não pode estar vazia";

  setErrors(errors);

  if (Object.keys(errors).length > 0) {
    return;
  }

  setTimeout(async () => {
    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário.");
      }

      setShowAlert(true);

      setTimeout(() => {
        window.location.href = "https://shiny-cat-b0a92d.netlify.app/";
      }, 2000);
    } catch (error) {
      console.log("Ocorreu um erro ao enviar o formulário.", error);
    }
  });
};
