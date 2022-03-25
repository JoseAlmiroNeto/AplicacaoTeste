import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import { AreaLogin } from './styled';

import {  BtnDefault } from './styled';

import { BackgroudLogin } from './styled';

export default () => {

    return (
        <BackgroudLogin>
            <AreaLogin>
                <img className="img-login" src="../../../inbox.png" />

                <form>
                    <div className="form-input">
                        <label>Usuário</label>
                        <input type='user'></input>
                    </div>
                    <div className="form-input">
                        <label>Senha</label>
                        <input type='password'></input>
                    </div>

                    <BtnDefault>Entrar</BtnDefault>
                </form>

            </AreaLogin>  
        </BackgroudLogin>        
    );
}