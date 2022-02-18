 // Importa os Hooks e as imagens 

 import React, { useState , useRef } from "react";

 import { Link } from "react-router-dom";

 import axios from "axios";

 import Peoples from "../../assets/talking.png";
 
 import VectorR from "../../assets/vector-right.svg";
 
 import {
   Container,
   H1,
   Image,
   ContainerItems,
   InputLabel,
   Input,
   Button
 } from "./styles";
 
 // JSX = mistura do HTML com JS
 function Home() {
   const [users, setUsers] = useState([]);
 
   // Pega o valor dos Inputs
   const inputName = useRef();
   const inputAge = useRef();
 
     // Um estado no React é imutável
 // Recebe o valor dos inputs e o exibe
 async function addNewUser(){

  const {data : newUser }= await axios.post("http://localhost:3001/users", 
  {name: inputName.current.value, 
   age: inputAge.current.value});

   setUsers([...users,newUser]); // spread operator("...") = joga os itens dentro do array correto
   }

   // Estrutura HTML com JS
   return (
     <Container>
       <Image src={Peoples} alt="logo" />
       <ContainerItems>
         <H1> Olá! </H1>
 
         <InputLabel> Nome: </InputLabel>
         <Input ref={inputName} placeholder="Nome" />
 
         <InputLabel> Idade: </InputLabel>
         <Input  ref={inputAge} placeholder="Idade" />
 
         <Button to="/users" onClick={addNewUser}>
           Cadastrar <img src={VectorR} alt="vector-right" />
         </Button>
 
       </ContainerItems>
     </Container>
   );
 
   }
 
 export default Home;