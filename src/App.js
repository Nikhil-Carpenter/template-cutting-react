import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './user_blocks/Header';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Why from './Components/Why';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="hero_area">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/why' element={<Why></Why>}></Route>
            <Route path='/testimonial' element={<Testimonial></Testimonial>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
