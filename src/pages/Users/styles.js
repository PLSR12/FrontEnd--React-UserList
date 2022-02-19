import styled from "styled-components";
import Background from "../../assets/background-image.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  max-height: 110vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 50px;

  border: 1px solid white;
  outline: none;

  cursor: pointer;

  color: #ffff;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  background-color: transparent;
  border-radius: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  outline: none;
  border: none;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;

    cursor: pointer;
  }
`;
