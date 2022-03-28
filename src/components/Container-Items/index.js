import React from "react";

import { ContainerItems } from "./styles"

function Space(props){
    return <ContainerItems IsBlur={props.IsBlur}> {props.children}</ContainerItems>
}

export default Space