import { FormEvent, useState } from 'react';
import { Input } from '../../input';
import { Button, Container, Footer } from './styles'
// import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export function ModalLogin({ setClose }: {setClose: () => void }) {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

  async function createCategory(e: FormEvent) {

    e.preventDefault()

    if (!emailRegex.test(email)) {
      toast.error('Insira um e-mail válido.')
    }

    try {

      // const response = await api.post('/categoria', {nome, email})
      // console.log(response.data)

      localStorage.setItem('@gameofold:login', JSON.stringify({nome, email}))

      toast.success("Conta criada com sucesso!")
      setClose()

    } catch (e: any) {
      toast.error(e.response.data.msg)
      console.log(e.response)
    }

  }

  return (
    <Container>
      <form onSubmit={createCategory}>

        <h1>Login</h1>

        <Input label='Nome' name='name' valor={nome} setValor={setNome} maxLength={20} required>
          <FaRegUserCircle  size={18} />
        </Input>

        <Input label='Email' name='email' valor={email} setValor={setEmail} maxLength={50} required>
          <MdOutlineEmail  size={18} />
        </Input>

        <Footer>
          <Button type='submit'>Entrar</Button>
        </Footer>
      </form>
    </Container >
  );
}