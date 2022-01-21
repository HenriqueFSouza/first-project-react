import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import H1 from './../../components/Title'
import ContainersItens from '../../components/ContainersItem'
import Button from '../../components/Button'

import Avatar from './../../assets/avatar.svg'
import Arrow from './../../assets/arrow.svg'
import Trash from './../../assets/trash.svg'

import {
  Containers,
  Image,
  User
} from './styles'

// Sintaxe JSX
const Users = () => {

  // Para fazer isso precisamos criar um Estado, utilizando react hook( ferramenta )
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)
  }

  /* REACT HOOK => useEffect ( Efeito Colateral )
      - é chamado quando a alicação inicia( página carregar )
      - ou quando um estado que está no arry de dependências do useEffect é alterado
  */
  useEffect(() => {

    async function fetchUser() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUser()
  }, [])

  function goBackPage() {
    navigate("/")
  }

  return (
    <Containers>
      <Image alt="logo-image" src={Avatar} />
      <ContainersItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img alt="lata-de-lixo" src={Trash} /></button>
            </User>
          ))}
        </ul>

      <Button isBack={true} onClick={goBackPage}><img alt="seta" src={Arrow} />Voltar </Button>

      </ContainersItens>
    </Containers>
  )
}

export default Users