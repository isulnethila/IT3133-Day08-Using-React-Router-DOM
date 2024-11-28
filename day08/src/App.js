import { BrowserRouter as Router, Routes, Route, Link,NavLink } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Dashbord from './Components/Dashbord';
import Home from './Components/Home';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dash' element={<Dashbord/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
