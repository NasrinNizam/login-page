import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { ToastContainer } from 'react-toastify'
import database from './firebase.config'
import app from './firebase.config'

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
      <ToastContainer />
    </>
  )
}

export default App
