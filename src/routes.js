import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './page/Login';
import Home from './page/Home';
import NewSolicitacoes from './page/NovaSolicitacao';

 export default () => {

    
 
    return (
        <Routes>
            <Route exact path="Login" element={<Login/>} />
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/nova-solicitacao" element={<NewSolicitacoes/>} />
        </Routes>
    );
}


