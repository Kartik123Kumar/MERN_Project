import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup() {

const navigate = useNavigate();

useEffect(()=>{
  const auth = localStorage.getItem("user")
  if(auth){
    navigate('/')
  }
})

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [Error, setError] = useState(false)

const Register= async ()=>{

  if(!name || !email || !password){
    setError(true)
    return false
  }

 let result = await fetch("http://localhost:5000/register",{
  method:'Post',
  body: JSON.stringify({name,email,password}),
  headers: {
    "Content-Type":"application/json"
   }
 })
 result = await result.json()
 console.log(result)
 if(result){
   localStorage.setItem('user',JSON.stringify(result))
  navigate("/")
 }
}


  return (
  <div className='container'>
      <form >
      <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Name</label>
          <input type="text" className="form-control" style={{border:"2px solid black"}} placeholder="Enter Name" value={name} onChange={(e)=>setname(e.target.value)}/>
          {Error && !name &&<span style={{color:"red"}}>Enter Valid Name</span>}
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="text" className="form-control" style={{border:"2px solid black"}} placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
          {Error && !email &&<span style={{color:"red"}}>Enter Valid Email</span>}
        </div>
        <div className="cl-md-12">
          <label htmlFor="inputPassword4" className="form-label" >Password</label>
          <input type="password" className="form-control" style={{border:"2px solid black"}} placeholder="Enter Password" value={password}onChange={(e)=>setpassword(e.target.value)}/>
          {Error && !password &&<span style={{color:"red"}}>Enter Valid Password</span>}
        </div>
      </form>
      <button  type="button" className="btn btn-primary my-2" onClick={Register}>Sign Up</button>
    </div>
  );
}

