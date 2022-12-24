import './css/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu'
import Login from './pages/Login'

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
  ]);

  return(
    
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App