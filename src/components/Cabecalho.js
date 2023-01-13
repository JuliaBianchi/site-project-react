import React from 'react'
import { Link } from 'react-router-dom'
import loginImage from '../assets/images/login.png'



export default function Cabecalho(props) {

    const { iconLogin, textoAlternativo } = props

    const getNamePlatform = () => {
        return " Bianchi Corporation"
    }

    return (
        <div className='cabecalho'>
            {iconLogin === true ?
             <img src={loginImage} style={{ width: 200 }} alt="Imagem de Login" /> : null}

            <h1> {textoAlternativo} {getNamePlatform()} ! </h1>

            {iconLogin === false ? <Link to="/" style={{ float: "right" }}>Logoff</Link> : null}

        </div>
    )
}