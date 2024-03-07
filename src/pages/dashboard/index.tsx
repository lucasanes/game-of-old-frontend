import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../components/modal";
import { ModalJoinRoom } from "../../components/modals/joinRoom";
import { ModalLogin } from "../../components/modals/modalLogin";
import { ToggleTheme } from "../../components/toggleTheme";
import { BackError } from "../../types/error-back";
import * as S from "./styles";

export function Dashboard() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalJoinIsOpen, setModalJoinIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("@gameofold:login")) {
        setModalLoginIsOpen(true);
      }
    }, 200);
  }, []);

  function createRoom() {
    try {
      // const response = await api.post('/create-room')
      // console.log(response.data)

      navigate(`/room/${"123123"}`);
    } catch (e) {
      const error = e as BackError;
      toast.error(error.message);
      console.log(error);
    }
  }

  function joinRoom() {
    setModalJoinIsOpen(true);
  }

  return (
    <S.Container>
      <S.Body>
        <ToggleTheme style={{ position: "absolute", top: 5, left: 20 }} />

        <Modal
          isOpen={modalLoginIsOpen}
          setOpen={() => {
            /**/
          }}
        >
          <ModalLogin setClose={() => setModalLoginIsOpen(false)} />
        </Modal>

        <Modal
          isOpen={modalJoinIsOpen}
          setOpen={() => setModalJoinIsOpen(false)}
        >
          <ModalJoinRoom setClose={() => setModalJoinIsOpen(false)} />
        </Modal>

        <S.Button onClick={createRoom}>Criar Sala</S.Button>

        <S.Button onClick={joinRoom}>Entrar Em Uma Sala</S.Button>
      </S.Body>
    </S.Container>
  );
}
