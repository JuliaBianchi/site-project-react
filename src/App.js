import './css/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Erros from './pages/Erros'
import Details from './pages/Details'
import { useState } from 'react'

const App = () => {

  const [login, setLogin] = useState(false)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login login={login} setLogin={setLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login />,
    },
    {
      path: "/details",
      element: login ? <Details /> : <Login />,
    },
    {
      path: "*",
      element: <Erros />,
    },
    
  ]);

  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App