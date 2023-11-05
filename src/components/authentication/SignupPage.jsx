import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./SignupPage.css";
import user from "../../assets/user.webp";
import { getUser, signup } from "../../services/userServices";
import { Navigate } from "react-router-dom";

const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve conter no mínimo 3 caracteres." }),
    email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
    password: z
      .string()
      .min(8, { message: "Senha deve conter no mínimo 8 caracteres." }),
    confirmPassword: z.string(),
    deliveryAddress: z
      .string()
      .min(15, { message: "Endereço deve conter no mínimo 15 caracteres." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas digitadas não conferem.",
    path: ["confirmPassword"],
  });

const SignupPage = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formError, setFormError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      await signup(formData, profilePic);

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
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Formulário de Registro</h2>

        <div className="image_input_section">
          <div className="image_preview">
            <img
              src={profilePic ? URL.createObjectURL(profilePic) : user}
              id="file-ip-1-preview"
            />
          </div>
          <label htmlFor="file-ip-1" className="image_label">
            Envie sua foto
          </label>
          <input
            type="file"
            onChange={(e) => setProfilePic(e.target.files[0])}
            id="file-ip-1"
            className="image_input"
          />
        </div>

        {/* Form Inputs */}
        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              className="form_text_input"
              type="text"
              placeholder="Insira seu nome"
              {...register("name")}
            />
            {errors.name && (
              <em className="form_error">{errors.name.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              className="form_text_input"
              type="email"
              placeholder="Insira seu e-mail"
              {...register("email")}
            />
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              className="form_text_input"
              type="password"
              placeholder="Insira sua senha"
              {...register("password")}
            />
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>

          <div>
            <label htmlFor="cpassword">Confirme sua senha</label>
            <input
              id="cpassword"
              className="form_text_input"
              type="password"
              placeholder="Insira sua senha novamente"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <em className="form_error">{errors.confirmPassword.message}</em>
            )}
          </div>

          <div className="signup_textares_section">
            <label htmlFor="address">Endereço de Entrega</label>
            <textarea
              id="address"
              className="input_textarea"
              placeholder="Insira seu endereço de entrega"
              {...register("deliveryAddress")}
            />
            {errors.deliveryAddress && (
              <em className="form_error">{errors.deliveryAddress.message}</em>
            )}
          </div>
        </div>

        {formError && <em className="form_error">{formError}</em>}

        <button className="search_button form_submit" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
