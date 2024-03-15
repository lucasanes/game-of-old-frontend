import { AxiosError } from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { BackError } from "../../types/error-back";

interface AuthContextData {
  data: {
    nome: string | null;
    token: string | null;
  };
  signIn: (nome: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<{
    nome: string | null;
    token: string | null;
  }>({
    nome: null,
    token: null,
  });

  function signIn(nome: string) {
    api
      .post("/auth", { nome })
      .then((response) => {
        setData({ nome, token: response.data });
        api.defaults.headers.common["Authorization"] = response.data;
        localStorage.setItem("@gameofold:token", response.data);
      })
      .catch((error: AxiosError) => {
        const e = error as unknown as BackError;
        toast.error(e.message);
      });
  }

  function signOut() {
    api.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem("@gameofold:token");

    window.location.href = "/";

    setData({ nome: null, token: null });
  }

  useEffect(() => {
    const token = localStorage.getItem("@gameofold:token");

    if (!token) {
      setData({ nome: null, token: null });
      return;
    }

    api
      .get(`/auth/${token}`)
      .then((response) => {
        setData({ nome: response.data.nome, token });
      })
      .catch(() => {
        signOut();
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        data,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useMeuContexto deve ser usado dentro de um MeuContextoProvider"
    );
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
