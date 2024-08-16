import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

function Register() {

  React.useEffect(()=>{
    if(localStorage.getItem("user-info")){
      navigate("/add")
    }
  },[])
  const[name, setName]=React.useState("")
  const[password, setPassWord]=React.useState("")
  const[email, setEmail]=React.useState("")
  const navigate=useNavigate()

   async function SignUp() {
    let items={name, password, email}

    let result= await fetch("http://127.0.0.1:8000/api/register",{
      method:"POST",
      body:JSON.stringify(items),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    result= await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/add")
  }
  return (
    <>
      <Header/>
      <div className='col-sm-6 offset-sm-3'>
        <h1>Register</h1>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='name'/> <br/>
        <input type='password' value={password} onChange={(e)=>setPassWord(e.target.value)} className='form-control' placeholder='password'/> <br/>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='email'/> <br/>
        <button onClick={SignUp} className='btn btn-primary'>Sign Up</button>
      </div>
    </>
  )
}

export default Register
