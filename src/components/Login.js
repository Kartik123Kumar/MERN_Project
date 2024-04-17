import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

const [email, setemail] = useState('')
const [password, setpassword] = useState('')

const navigate = useNavigate()


useEffect(()=>{
  const auth = localStorage.getItem("user")
  if(auth){
    navigate('/')
  }
})

const Login= async ()=>{
  let result = await fetch("http://localhost:5000/login",{
    method:'post',
    body: JSON.stringify({email,password}),
    headers:{
      "Content-Type" : "application/json"
    }
  })
  result = await result.json()
  console.log(result)
  
  if(result.name){
   localStorage.setItem("user",JSON.stringify(result))
   navigate('/')
  }else
  alert("Enter Correct Details")
}

  return (
    <div className='formLogin'>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="text" className="form-control" style={{border:"2px solid black"}} placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="cl-md-12">
          <label htmlFor="inputPassword4" className="form-label" >Password</label>
          <input type="password" className="form-control" style={{border:"2px solid black"}} placeholder="Enter Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <button  type="button" className="btn btn-primary my-2" onClick={Login} >Log in</button>
    </div>
  )
}
