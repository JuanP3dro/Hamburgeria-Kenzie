import { StyledForm } from "../../components/form/styled";
import LogoSection from "../../components/logo";
import { StyledLogin } from "./style";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { iLoginFormValues } from "./@types";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

function Login() {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      (() => {
       navigate('/dashboard')
      })();
    }
  }, []);
  
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório!")
      .email("é necessário fornecer um e-mail válido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .min(6, "É necessário pelo ter menos 6 caracteres")
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iLoginFormValues>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const submit: SubmitHandler<iLoginFormValues> = (formData: any) => {
    userLogin(formData, setLoading);
  };

  return (
    <StyledLogin>
      <LogoSection />
      <StyledForm noValidate onSubmit={handleSubmit(submit)}>
        <div className="formContainer">
          <h2 className="title3">Login</h2>
          <TextField
            label="Email"
            variant="outlined"
            type="text"
            color= {errors.email ? 'error' : 'success'}
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="error title7">{errors.email.message}</p> 
          )}
          
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            color= {errors.password ? 'error' : 'success'}
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="error title7">{errors.password.message}</p>
          )}
          <button type="submit" className="title6" disabled={loading}>
          {loading ? "Logando..." : "Logar"}
          </button>
          <p className="title5 p">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <Link to={"/register"} className={"goRegister title6"}>
            Cadastrar
          </Link>
        </div>
      </StyledForm>
    </StyledLogin>
  );
}

export default Login;
