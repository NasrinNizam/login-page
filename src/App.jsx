import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={Route}/>
    </>
  )
}

export default App
