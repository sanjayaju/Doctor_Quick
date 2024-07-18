import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctor/Doctors'
import DoctorDetails from '../pages/Doctor/DoctorsDetails'

import {Routes,Route} from 'react-router-dom'



function Routers() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/doctors/:id' element={<Doctors/>}/>
    <Route path='/doctorsdetails' element={<DoctorDetails/>}/>
   </Routes>
  )
}

export default Routers