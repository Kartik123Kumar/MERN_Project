import React from 'react'
import { Link,useNavigate} from 'react-router-dom';

export default function Navbar() {

  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const Logout=()=>{
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div> 
    {auth ? <ul className='nav-ul dark'>
         <li><Link to='/'>Product</Link></li>
         <li><Link to='/add'>Add Product</Link></li>
         <li><Link to='/update'>Update Product</Link></li>
         <li><Link to='/profile'>Profile</Link></li>
         <li><Link to='/signup' onClick={Logout}>Logout ({JSON.parse(auth).name})</Link></li>
         </ul>
         :
        <ul className='nav-ul dark'>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
      }
 </div>
  )
}
