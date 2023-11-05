import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./LoginPage.css";
import { getUser, login } from "../../services/userServices";
import { Navigate, useLocation } from "react-router-dom";

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
  const [formError, setFormError] = useState("");
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      await login(formData);

      const { state } = location;
      window.location = state ? state.from : "/";
      window.location = "/";
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setFormError(err.response.data.message);
      }
    }
  };

  if (getUser()) {
    return <Navigate to="/" />;
  }

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

          {formError && <em className="form_error">{formError}</em>}

          <button type="submit" className="search_button form_submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
