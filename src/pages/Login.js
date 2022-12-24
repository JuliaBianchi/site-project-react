import React from "react"
import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

    let mensagemLogin = "Informe os dados do usuário para acessa a plataforma."
    const  navigate = useNavigate();

    return (
        <div>
            <Cabecalho />

            <div>

                <span className='informativo'>{mensagemLogin}</span> <br />

                <input placeholder="Username:" type="text" /> <br />
                <input placeholder="Password:" type="password" /> <br />

                <Link to={'/menu'}>Ir para o menu</Link>

                <button onClick={() => navigate("/menu")}>ENTRAR</button>
            </div>

            <Rodape />
        </div>
    )
}