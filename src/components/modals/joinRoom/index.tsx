import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackError } from "../../../types/error-back";
import { InputOTP } from "../../inputOTP";
import { Button, Container, Footer } from "./styles";

interface Type {
  [key: number]: string;
}

export function ModalJoinRoom({ setClose }: { setClose: () => void }) {
  const [inputs, setInputs] = useState<Type>({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });

  const navigate = useNavigate();

  const createCategory = useCallback(
    function (code: string) {
      try {
        // const response = await api.post('/categoria', {nome, email})
        // console.log(response.data)

        navigate(`/room/${code}`);
      } catch (e) {
        const error = e as BackError;
        toast.error(error.message);
        console.log(error);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const code = Object.values(inputs);

    if (code.join("").length == 6) {
      createCategory(code.join(""));
    }
  }, [createCategory, inputs]);

  return (
    <Container>
      <form>
        <h1>Join Room</h1>

        <InputOTP inputs={inputs} setInputs={setInputs} />

        <Footer>
          <Button type="button" onClick={setClose}>
            Cancelar
          </Button>
        </Footer>
      </form>
    </Container>
  );
}
