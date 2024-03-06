import { useEffect, useState } from 'react';
import * as S from './styles'
import { Modal } from '../../components/modal';
import { ModalLogin } from '../../components/modals/modalLogin';

export function Dashboard() {

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)

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
    
  }

  return (
    <S.Container>
      <S.Body>

        <Modal isOpen={modalLoginIsOpen} setOpen={() => {}}>
          <ModalLogin setClose={() => setModalLoginIsOpen(false)}/>
        </Modal>

        <S.Button onClick={createRoom}>Criar Sala</S.Button>

        <S.Button onClick={joinRoom}>Entrar Em Uma Sala</S.Button>
      </S.Body>
    </S.Container>
  );
}