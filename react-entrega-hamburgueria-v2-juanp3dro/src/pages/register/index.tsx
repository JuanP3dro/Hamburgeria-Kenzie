import { Link, useNavigate } from "react-router-dom";
import { StyledForm } from "../../components/form/styled";
import LogoSection from "../../components/logo";
import { StyledRegister } from "./style";
import TextField from "@mui/material/TextField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { iRegisterFormValues } from "./@types";
import { UserContext } from "../../contexts/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Register() {

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      (() => {
       navigate('/dashboard')
      })();
    }
  }, []);

  const registerSchema = yup.object().shape({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .required("O email é obrigatório!")
      .email("é necessário fornecer um e-mail válido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .min(6, "É necessário pelo ter menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = (formData: any) => {
    console.log(formData);
    userRegister(formData, setLoading);
  };

  return (
    <StyledRegister>
      <LogoSection />
      <StyledForm noValidate onSubmit={handleSubmit(submit)}>
        <div className="formContainer">
          <div className="innerDiv">
            <h2 className="title3">Cadastro</h2>
            <Link to={"/"} className="goLogin title5">
              Retornar para o login
            </Link>
          </div>
          <TextField
            label="Nome"
            variant="outlined"
            type="text"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="error title7">{errors.name.message}</p>
          )}
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error title7">{errors.email.message}</p>
          )}
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error title7">{errors.password.message}</p>
          )}
          <TextField
            label="Confirmar Senha"
            variant="outlined"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="error title7 ">{errors.confirmPassword.message}</p>
          )}
          <button
            type="submit"
            className="goRegister title6"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </div>
      </StyledForm>
    </StyledRegister>
  );
}

export default Register;
