import React from "react";

import { Button as ContainerButton } from "./styles";

function Button(props){

    return (
    <ContainerButton {...props} IsBack={props.isBack}> {props.children}</ContainerButton>
    )
}

export default Button