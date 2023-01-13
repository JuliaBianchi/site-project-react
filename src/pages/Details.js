import React from "react";
import { Link, useLocation } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";


export default function Details(){

    const location = useLocation()
    const { state } = location

    return (
        <>
            <Cabecalho iconLogin={false} />
            <div>
                <span> <Link to={"/menu"}>Voltar ao Menu</Link> </span>

                <h2>Dados do cliente</h2>

                <img src={state.picture.large} style={{ maxWidth: 150, borderRadius: 50 }} />
                <br />
                <p>Nome: {state.name.title}. {state.name.first} {state.name.last}</p>
                <p>E-mail: {state.email}</p>
                <p>Telefone: {state.phone}</p>
                <p>País: {state.location.country}</p>
                <p>Estado: {state.location.state}</p>
                <p>Cidade: {state.location.city}</p>
              
                
                
            </div>
            <Rodape />
        </>
    )
}