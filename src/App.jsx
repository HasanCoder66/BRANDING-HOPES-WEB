import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Blog from './components/Blog/Blog.jsx'
import Services from './components/Services/Services.jsx'
import './App.css'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'

function App() {

  return (
    <>

<BrowserRouter>
<Routes>
 <Route path='/' element={<Home />} />
 <Route path='/login' element={<Login />} />
 <Route path='/signup' element={<Signup />} />
 <Route path='/blog' element={<Blog />} />
 <Route path='/contact' element={<Contact />} />
 <Route path='/services' element={<Services />} />
 <Route path='/about' element={<About />} />
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
