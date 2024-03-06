import { useEffect, useState } from 'react';
import * as S from './styles'
import { Modal } from '../../components/modal';
import { ModalLogin } from '../../components/modals/modalLogin';
import { ModalJoinRoom } from '../../components/modals/joinRoom';
import { ToggleTheme } from '../../components/toggleTheme';

export function Dashboard() {

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)
  const [modalJoinIsOpen, setModalJoinIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem('@gameofold:login')) {
        setModalLoginIsOpen(true)
      }
    }, 200)
  }, [])

  function createRoom() {

  }

  function joinRoom() {
    setModalJoinIsOpen(true)
  }

  return (
    <S.Container>
      <S.Body>

        <ToggleTheme style={{ position: 'absolute', top: 5, left: 20 }} />

        <Modal isOpen={modalLoginIsOpen} setOpen={() => { }}>
          <ModalLogin setClose={() => setModalLoginIsOpen(false)} />
        </Modal>

        <Modal isOpen={modalJoinIsOpen} setOpen={() => setModalJoinIsOpen(false)}>
          <ModalJoinRoom setClose={() => setModalJoinIsOpen(false)} />
        </Modal>

        <S.Button onClick={createRoom}>Criar Sala</S.Button>

        <S.Button onClick={joinRoom}>Entrar Em Uma Sala</S.Button>
      </S.Body>
    </S.Container>
  );
}