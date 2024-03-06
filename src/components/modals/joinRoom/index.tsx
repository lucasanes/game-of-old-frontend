import { FormEvent, useState } from 'react';
import { Input } from '../../input';
import { Button, Container, Footer } from './styles'
// import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export function ModalJoinRoom({ setClose }: {setClose: () => void }) {

  const [code, setCode] = useState('')

  const navigate = useNavigate()

  async function createCategory(e: FormEvent) {

    e.preventDefault()

    try {

      // const response = await api.post('/categoria', {nome, email})
      // console.log(response.data)

      navigate(`/room/${code}`)

    } catch (e: any) {
      toast.error(e.response.data.msg)
      console.log(e.response)
    }

  }

  return (
    <Container>
      <form onSubmit={createCategory}>

        <h1>Join Room</h1>

        <Input label='Código' name='code' valor={code} setValor={setCode} minLength={6} maxLength={6} required>
          <IoLockClosedOutline size={18} />
        </Input>

        <Footer>
          <Button type='button' onClick={setClose}>Cancelar</Button>
        </Footer>
      </form>
    </Container >
  );
}