import { createContext, useEffect, useState } from "react";
import { iRegisterFormValues } from "../../pages/register/@types";
import { Api } from "../../services/api";
import { iDefaultProviderProps } from "./@types";
import {toast} from 'react-toastify'
import { iLoginFormValues } from "../../pages/login/@types";
import { useNavigate } from "react-router-dom";

interface iUser {
  id: string;
  name: string;
  email: string;
}



interface iUserLogin{
  accessToken: string;
    user: iUser;  
}

interface iUserContext {
  user: iUser | null;
  userLogin: (
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  userRegister: (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export const UserContext = createContext({} as iUserContext);

function UserProvider({ children }: iDefaultProviderProps) {
  const [user, setUser] = useState<iUser | null>(null);
 const navigate = useNavigate()

  async function userRegister(
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      const response = await Api.post<iUserLogin>("/users", formData);
      setLoading(true);
      console.log(response)
      setUser(response.data.user)
      console.log(user)
      toast.success('Cadastro completo!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate('/')
    } catch (error) {
      console.log(error);
      toast.error('Algo está errado', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(
    formData: iLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      const response = await Api.post<iUserLogin>("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.accessToken
      );
      navigate('/dashboard')
      setLoading(true);
    } catch (error) {
      console.log(error);
      toast.error('Algo está errado', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
