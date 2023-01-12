import React, {useState, useLayoutEffect} from "react"
import Rodape from "../components/Rodape"
import Cabecalho from "../components/Cabecalho"
import axios from 'axios'

export default function Menu(){

    const [clientes, setClientes] = useState([])

    useLayoutEffect(() => {
        axios.get("https://randomuser.me/api/?results=20")
            .then((retorno) => setClientes(retorno.data.results))
            .catch((error) => console.log(error))

        console.log("Estamos no layoutEffect")
    }, [])



    return(
        <>
        <Cabecalho iconLogin={false}/>
        <div>

            <h1>Lista dos Clientes</h1>
            {
            
            clientes.map((item, key) => 
            <div key={key}> {key} {item.name.title}. {item.name.first} - {item.email}</div>)
            
            }

        </div>

        <Rodape/>


        </>
        
    )
}