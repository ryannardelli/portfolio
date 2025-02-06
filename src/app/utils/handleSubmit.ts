import { FormEvent } from "react";

export const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
    setErrors: (errors: Record<string, string>) => void,
  ) => {
    event.preventDefault();
  
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
  
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
  
    console.log("Dados do formulário:", data);
  
    // Aqui você pode adicionar a lógica de envio do formulário
  };

