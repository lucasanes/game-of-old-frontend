import { FormEvent, useState } from "react";
import { Input } from "../../input";
import { Button, Container, Footer } from "./styles";
// import { api } from '../../../services/api';
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../../contexts/auth";

export function ModalLogin({ setClose }: { setClose: () => void }) {
  const [nome, setNome] = useState("");

  const { signIn } = useAuth();

  function createUser(e: FormEvent) {
    e.preventDefault();

    signIn(nome);

    setClose();
  }

  return (
    <Container>
      <form onSubmit={createUser}>
        <h1>Login</h1>

        <Input
          label="Nome"
          name="name"
          valor={nome}
          setValor={setNome}
          maxLength={20}
          required
        >
          <FaRegUserCircle size={18} />
        </Input>

        <Footer>
          <Button type="submit">Entrar</Button>
        </Footer>
      </form>
    </Container>
  );
}
