import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import People from './../../assets/people.svg'
import Arrow from './../../assets/arrow.svg'

import H1 from './../../components/Title'
import ContainersItens from '../../components/ContainersItem'
import Button from '../../components/Button'

import {
  Containers,
  Image,
  InputLabel,
  Input,
 
} from './styles'

// Sintaxe JSX
const App = () => {

  // Para fazer isso precisamos criar um Estado, utilizando react hook( ferramenta )
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const inputName = useRef()
  const inputAge = useRef()
  

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })

    setUsers([...users, newUser]);

    navigate("/usuarios")
  }

  return (
    <Containers>
      <Image alt="logo-image" src={People} />
      <ContainersItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /> </Button>
      </ContainersItens>
    </Containers>
  )
}

export default App