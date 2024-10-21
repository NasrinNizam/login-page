import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
