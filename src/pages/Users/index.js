 // Importa os Hooks e as imagens 

import React, { useState, useEffect  } from "react";

import axios from "axios";

import Avatar from "../../assets/peoples.svg";

import VectorL from "../../assets/vector-left.png";

import Trasher from "../../assets/trasher.svg";


import {
  Container,
  ContainerItems,
  H1,
  Image,
  User,
  Button
} from "./styles";

// JSX = mistura do HTML com JS

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
    const {data : newUser } = await axios.get("http://localhost:3001/users");
    
    setUsers(newUser);
  }
  
  fetchUsers()
  },[])

  // Deleta os users cadastrados
 async function deleteUser(userId) {
   await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
   }
 
   /* REACT HOOK => userEffect( Efeito Colateral)
      É chamado quando a aplicação inicia 
      Ou quando um estado que está no array de dependência [] do userEffect é alterado
   */
    
  // Estrutura HTML com JS
  return (
    <Container>
      <Image src={Avatar} alt="logo" />
      <ContainerItems>
        <H1> Usuários </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}> 
              <img src={Trasher} alt="trash" /> 
              </button>
            </User>
          ))}
        </ul>

        <Button to="/">
          Voltar <img src={VectorL} alt="vector-left" />
          
        </Button>

      </ContainerItems>
    </Container>
  );
          }

export default Users;