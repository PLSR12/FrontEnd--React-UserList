import styled from "styled-components";
import Background from "../../assets/background-image.svg";

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 40px;

    max-height:110vh;
`;

export const Image = styled.img `
    margin-top:30px;
`;

export const ContainerItems = styled.div `
    background: linear-gradient(
        157.44deg,
         rgba(255, 255, 255, 0.6) 0.84%,
          rgba(255, 255, 255, 0.6) 0.85%,
           rgba(255, 255, 255, 0.15) 100%
           );
    border-radius: 61px 61px 0px 0px;

    padding:60px 36px;
    display:flex;
    flex-direction:column;

    height:100vh;
`;

export const H1 = styled.h1 `
    font-style:normal;
    font-weight:bold;
    font-size:34px;
    line-height:40px;

    margin-bottom:60px;
    text-align:center;
    color:white;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top:50px;

    border:1px solid white;
    outline:none;

    cursor:pointer;

    color:#ffff;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    background: none;
    border-radius: 14px;

    display:flex;
    align-items:center;
    justify-content: center;
    gap:20px;

    &:hover{
        opacity:0.8;
    }

    &:active{
        opacity:0.5;
    }
`;

export const User = styled.li `
    display:flex;
    justify-content: space-around;
    align-items:center;
    margin-top:20px;

    width: 342px;
    height: 58px;
    
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) ;
    border-radius: 14px;

    outline:none;
    border:none;

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #FFFFFF;
    }

button {
    background: none;
    border:none;
    
    cursor:pointer;
}
`;