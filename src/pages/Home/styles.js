import styled from "styled-components";
import Background from "../../assets/bg image.svg"

export const Container = styled.div `
    background: url("${Background}");
    background-size: cover;

    display:flex;
    flex-direction:column;
    align-items:center;
    gap: 40px;

    min-height:100%;
`;

export const Image = styled.img `
    margin-top:30px;
`;

export const InputLabel = styled.p `
    letter-spacing:-0.400px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    margin-left:25px;

    color:#ffff;
    
`;

export const Input = styled.input `
    width: 342px;
    height: 58px;
    padding-left:25px;
    
    border:none;
    outline:none;

    font-style: normal ;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;

    color:#ffff;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) ;
    border-radius: 14px;
    margin-bottom:34px;

`;

