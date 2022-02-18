import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyles';
import Router from "./routes";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
    <> 
    <BrowserRouter>
        <Router /> 
        < GlobalStyle /> 
    </BrowserRouter>
    </> ,
    document.getElementById('root')
    );

    // Regra do sanduíche = pão em baixo e em cima e os recheios no meio

    // Tudo no React precisa do elemento pai , e segue a regra do sanduíche.

    // <> , </> = fragmento, serve para  seguir a regra do sanduíche.