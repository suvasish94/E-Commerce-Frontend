import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'

function Protected(props) {
    let Cmp = props.Cmp

    React.useEffect(()=>{
        if(!localStorage.getItem("user-info")){
          navigate("/register")
        }
      },[])
    const navigate = useNavigate()
  return (
    <div>
      <Cmp/>
    </div>
  )
}

export default Protected    
