import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  const handleUsernameData=(event)=>{
    setUsername(event.target.value);

  }

  const handlePasswordData=(event)=>{
    setPassword(event.target.value);
  }

  const handleLogin=(e)=>{
    e.preventDefault()
    // login(dispatch,{username,password})
  }

  return (
    <div className="login_container">
      <div className="login">
        <div className="login_title_contaier">
          <div className="login_title">Login</div>
          <div className="fast_sign">It's simpler and faster</div>   
        </div>  
        <div><hr className='log_hr'/></div> 
        <div className="user_container">
          <input className='sign_input' type="text" placeholder='Username'
           onChange={handleUsernameData}/>
        </div>
        <div className="user_container">
          <input className='sign_input' type="password" placeholder='Password' onChange={handlePasswordData} />
        </div>
        <div className="login_but"><button className='login_button'onClick={handleLogin}>Login</button></div>
      </div>
    </div>
  )
}
export default Login