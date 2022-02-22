 // Importa os Hooks e as imagens 

import React, { useState, useEffect  } from "react";

import { useNavigate } from 'react-router-dom';

import axios from "axios";

import Avatar from "../../assets/peoples.svg";
import VectorL from "../../assets/vector-left.png";
import Trasher from "../../assets/trasher.svg";

import H1 from "../../components/Title";
import ContainerItems from "../../components/Container-Items";
import Button from "../../components/Button";

import {
  Container,
  Image,
  User
} from "./styles";

// JSX = mistura do HTML com JS

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
    const {data : newUser } = await axios.get("https://user-list-backend.herokuapp.com/users")
    
    setUsers(newUser);
  }
  
  fetchUsers()
  },[])

  // Deleta os users cadastrados
 async function deleteUser(userId) {
   await axios.delete(`https://user-list-backend.herokuapp.com/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
   }

   function backtoHome() {
      navigate("/")
   }
 
   /* REACT HOOK => userEffect( Efeito Colateral)
      É chamado quando a aplicação inicia 
      Ou quando um estado que está no array de dependência [] do userEffect é alterado
   */
    
  // Estrutura HTML com JS
  return (
    <Container>
      <Image src={Avatar} alt="logo" />
      <ContainerItems IsBlur={true}>
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

        <Button isBack={true} onClick={(backtoHome)} >
        <img src={VectorL} alt="vector-left" /> Voltar 
          
        </Button>

      </ContainerItems>
    </Container>
  );
          }

export default Users;