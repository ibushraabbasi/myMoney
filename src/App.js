
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
       <Routes>
         <Route exact path='/' Component={Home} />
         <Route path='/login' Component={Login} />
         <Route path='/signup' Component={Signup} />
       </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App
