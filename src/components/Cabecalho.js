import React from 'react'
import loginImage from '../assets/images/login.png'



export default function Cabecalho() {

    const getNamePlatform = () => {
        return "Login Bianchi Corporation"
      }
    
    return (
        <div className='cabecalho'> 
            <img src={ loginImage } alt="Imagem de Login" style={{ width:200 }} /> 

        <h1>{getNamePlatform()}</h1>

    </div>
    )
}
