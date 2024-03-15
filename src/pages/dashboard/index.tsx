import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../../components/modal";
import { ModalJoinRoom } from "../../components/modals/joinRoom";
import { ModalLogin } from "../../components/modals/modalLogin";
import { buttonSound } from "../../components/sound";
import { ToggleTheme } from "../../components/toggleTheme";
import { useAuth } from "../../contexts/auth";
import { api } from "../../services/api";
import { BackError } from "../../types/error-back";
import * as S from "./styles";

export function Dashboard() {
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
  const [modalJoinIsOpen, setModalJoinIsOpen] = useState(false);

  const navigate = useNavigate();

  const { data } = useAuth();

  function local() {
    try {
      buttonSound();
      navigate("/local");
    } catch (error) {
      console.log(error);
    }
  }

  function createRoom() {
    if (data.token == null) {
      setModalLoginIsOpen(true);
      return;
    }

    api
      .post<AxiosResponse<{ code: string }>>(
        "/room",
        {},
        { headers: { user_id: "1" } }
      )
      .then((response) => {
        console.log(response.data);
        buttonSound();
        navigate(`/room/${"123123"}`);
      })
      .catch((error: AxiosError) => {
        const e = error.response?.data as BackError;
        console.log(e);
        toast.error(e.message);
      });
  }

  function joinRoom() {
    if (data.token == null) {
      setModalLoginIsOpen(true);
      return;
    }

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
