import { FormEvent, useEffect, useState } from 'react';
import { Input } from '../../input';
import { Button, Container, Footer } from './styles'
// import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { InputOTP } from '../../inputOTP';

interface Type {
  [key: number]: string
}

export function ModalJoinRoom({ setClose }: { setClose: () => void }) {

  const [inputs, setInputs] = useState<Type>({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  })

  const navigate = useNavigate()

  useEffect(() => {

    const code = Object.values(inputs)

    if (code.join('').length == 6) {
      createCategory(code.join(''))
    }

  }, [inputs])

  async function createCategory(code: string) {

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
      <form>

        <h1>Join Room</h1>

        <InputOTP inputs={inputs} setInputs={setInputs} />

        <Footer>
          <Button type='button' onClick={setClose}>Cancelar</Button>
        </Footer>
      </form>
    </Container >
  );
}