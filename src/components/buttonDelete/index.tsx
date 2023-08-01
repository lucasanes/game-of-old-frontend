import { FiTrash } from 'react-icons/fi';
import { Container } from './styles'
import { ModalDeleteConfirm } from '../modalDeleteConfirm';
import { Modal } from '../modal';
import { useState } from 'react';

type ButtonDeleteProps = {
  size?: number,
  handleExecute: () => void
}

export function ButtonDelete({ size = 20, handleExecute }: ButtonDeleteProps) {

  const [open, setOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={open} setOpen={setOpen}>
        <ModalDeleteConfirm handleExecute={handleExecute} setClose={() => setOpen(false)} />
      </Modal>

      <button type='button' onClick={() => setOpen(true)}>
        <FiTrash size={size} />
      </button>
    </Container>
  );
}