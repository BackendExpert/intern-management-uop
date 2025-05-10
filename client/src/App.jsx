import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/AuthPage/SignUp'
import InternRegistaer from './pages/AuthPage/InternRegistaer'
import VerifyEmail from './pages/AuthPage/VerifyEmail'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/SignUp' element={<SignUp /> } />
        <Route path='/InternRegistaer' element={<InternRegistaer /> } />
        <Route path='/VerifyEmail' element={<VerifyEmail /> } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
