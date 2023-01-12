import './css/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Erros from './pages/Erros'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/menu",
      element: <Menu/>,
    },
    {
      path: "*",
      element: <Erros/>,
    },
  ]);

  return(
    
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App