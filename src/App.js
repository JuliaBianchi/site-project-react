import './css/style.css'
import loginImage from './assets/images/login.png'

const App = () => {

  let mensagemLogin = "Informe os dados do usuário para acessa a plataforma."

  const getNamePlatform = () => {
    return "Bianchi Corporation"
  }


  return(
    <>
      <div> 
        <img src={ loginImage } alt="Imagem de Login" style={{ width:200 }} /> 
      </div>

      <h1>{getNamePlatform()}</h1>

      <span className='informativo'>{mensagemLogin}</span> <br/>

      <input placeholder="Username:"  type="text" /> <br/>
      <input placeholder="Password:" type="password" /> <br/>

      <button>ENTRAR</button>
    </>
  )
}

export default App