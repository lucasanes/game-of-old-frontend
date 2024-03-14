import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../components/modal";
import { ModalJoinRoom } from "../../components/modals/joinRoom";
import { ModalLogin } from "../../components/modals/modalLogin";
import { buttonSound } from "../../components/sound";
import { ToggleTheme } from "../../components/toggleTheme";
import { BackError } from "../../types/error-back";
import * as S from "./styles";
import { AxiosResponse } from "axios";
import { api } from "../../services/api";

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

  function local() {
    try {
      buttonSound();
      navigate("/local");
    } catch (e) {
      const error = e as BackError;
      toast.error(error.message);
      console.log(error);
    }
  }

  function createRoom() {
    api
      .post<AxiosResponse<{ code: string }>>("/room", {})
      .then((response) => {
        console.log(response.data);

        buttonSound();
        navigate(`/room/${"123123"}`);
      })
      .catch((e) => {
        const error = e as BackError;
        toast.error(error.message);
        console.log(error);
      });
  }

  function joinRoom() {
    buttonSound();
    setModalJoinIsOpen(true);
  }

  return (
    <S.Container>
      <S.Body>
        <ToggleTheme style={{ position: "absolute", top: 20, left: 30 }} />

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

        <S.Button onClick={createRoom}>Create Room</S.Button>

        <S.Button onClick={joinRoom}>Join Room</S.Button>

        <S.Button onClick={local}>Local</S.Button>
      </S.Body>
    </S.Container>
  );
}
