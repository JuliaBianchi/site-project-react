import React from 'react'
import loginImage from '../assets/images/login.png'



export default function Cabecalho(props) {

    const getNamePlatform = () => {
        return " Bianchi Corporation"
      }
    
    return (
        <div className='cabecalho'>
            {props.iconLogin === true ? <img src={ loginImage } alt="Imagem de Login" style={{ width:200 }} /> : null}

        <h1> {props.textoAlternativo} {getNamePlatform()} </h1>

    </div>
    )
}
