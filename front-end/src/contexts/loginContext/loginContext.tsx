import { createContext } from "react";
import { ILoginContext, ILoginFormData, ILoginProvider } from "./interface";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider: React.FC<ILoginProvider> = ({ children }) => {
  const navigate = useNavigate();
  const loginRequest = async (
    formData: ILoginFormData
  ): Promise<string | undefined> => {
    try {
      const response = await api.post("/login", formData);
      console.log(response.data);
      localStorage.setItem("@token", response.data);
      navigate("/dashboard");
      return response.data.token;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginContext.Provider value={{ loginRequest }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
