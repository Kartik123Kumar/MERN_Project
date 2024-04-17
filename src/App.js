import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Addproduct from './components/Addproduct';
import Products from './components/Products';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Products/>}/>
        <Route path='/add' element={<Addproduct/>}/>
        <Route path='/update' element={<h1>update</h1>}/>
        <Route path='/logout' element={<h1>logout</h1>}/>
        <Route path='/profile' element={<h1>Profile</h1>}/>
        </Route>
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      {/* <Signup/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
