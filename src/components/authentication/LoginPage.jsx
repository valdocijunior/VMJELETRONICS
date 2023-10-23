import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./LoginPage.css";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Por favor, insira um endereço de e-mail válido." })
    .min(3),
  password: z
    .string()
    .min(8, { message: "Sua senha deve conter no mínimo 8 caracteres." }),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (formData) => console.log(formData);

  return (
    <section className="align_center form_page">
      <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Preencha seus Dados</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="form_text_input"
              placeholder="Insira seu endereço de e-mail"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              className="form_text_input"
              placeholder="Insira sua senha"
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>

          <button type="submit" className="search_button form_submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
