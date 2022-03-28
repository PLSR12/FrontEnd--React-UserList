// Importa os Hooks e as imagens

import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import Peoples from "../../assets/talking.png";

import VectorR from "../../assets/vector-right.svg";

import H1  from "../../components/Title";

import ContainerItems from "../../components/Container-Items";

import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input
} from "./styles";


function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  
  const inputName = useRef();
  const inputAge = useRef();

 
 
  async function addNewUser() {
    const { data: newUser } = await axios.post("https://user-list-backend.herokuapp.com/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]); 

    navigate("/users");
  }


  return (
    <Container>
      <Image src={Peoples} alt="logo" />
      <ContainerItems>
        <H1> Olá </H1>

        <InputLabel> Nome: </InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel> Idade: </InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img src={VectorR} alt="vector-right" />
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default Home;
