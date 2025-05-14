import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import SignUp from './pages/AuthPage/SignUp'
import InternRegistaer from './pages/AuthPage/InternRegistaer'
import VerifyEmail from './pages/AuthPage/VerifyEmail'
import SignIn from './pages/AuthPage/SignIn'
import Forgetpass from './pages/AuthPage/Forgetpass'
import VerifyPassOtp from './pages/AuthPage/VerifyPassOtp'
import UpdatePassword from './pages/AuthPage/UpdatePassword'
import PrivateRoute from './components/Auth/PriveteRoute'
import Dashbaord from './components/Dashboard/Dashbaord'
import DashHome from './pages/Dashboard/DashHome'
import UnderDev from './components/Dashboard/UnderDev'

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
        <Route path='/VerifyPassOtp' element={<VerifyPassOtp /> } />
        <Route path='/UpdatePassword' element={<UpdatePassword /> } />

        <Route path='/Dashboard/' element={<PrivateRoute element={<Dashbaord /> } /> } >
          <Route path='Home' element={<PrivateRoute element={<DashHome /> } /> } />
          <Route path='*' element={<PrivateRoute element={<UnderDev />} /> } />
        </Route>
        
      </Routes>
    </BrowserRouter>

  )
}

export default App
