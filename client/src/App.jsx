import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/AuthPage/SignUp'
import InternRegistaer from './pages/AuthPage/InternRegistaer'
import VerifyEmail from './pages/AuthPage/VerifyEmail'
import SignIn from './pages/AuthPage/SignIn'
import Forgetpass from './pages/AuthPage/Forgetpass'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/testing' element={<HomePage /> } />
        <Route path='/' element={<SignIn /> } /> 
        <Route path='/SignUp' element={<SignUp /> } />
        <Route path='/InternRegistaer' element={<InternRegistaer /> } />
        <Route path='/VerifyEmail' element={<VerifyEmail /> } />
        <Route path='/Forgetpass' element={<Forgetpass /> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
