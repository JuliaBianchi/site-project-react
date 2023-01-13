import React, { useState } from "react"
import Cabecalho from "../components/Cabecalho"
import Rodape from "../components/Rodape"
import { useNavigate } from "react-router-dom"

export default function Login(props) {

    const navigate = useNavigate();

    let mensagemLogin = "Informe os dados do usuário para acessa a plataforma."

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [msgError, setMsgError] = useState("")

    const  validar = () => {

        if (userName === "admin" && password === "admin") {
            props.setLogin(true)
            navigate("/menu")
        }else{
            setMsgError("Usuário e senha incorretos!")
            props.setLogin(false)
        }
        
    }

    return (
        <div>
            <Cabecalho textoAlternativo="Login" iconLogin = {true}/>

            <div>
                <span className='informativo'>{mensagemLogin}</span>
                <br/>
                <input placeholder="Username:" type="text" value={userName} onChange={(p) => setUserName (p.target.value)} /> <br />
                <input placeholder="Password:" type="password"  value={password} onChange={(p) => setPassword (p.target.value)}/> <br />
                <br/>
                <span style={{ color: "red", fontSize: 16 }}>{msgError}</span>
                <br/>

                <button onClick={validar}>ENTRAR</button>
            </div>

            <Rodape />
        </div>
    )
}