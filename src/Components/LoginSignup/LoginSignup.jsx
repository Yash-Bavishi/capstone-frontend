import React, {useState} from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import {useNavigate} from 'react-router-dom';

const LoginSignup = () => {
 const navigate = useNavigate();
 const [action, setAction] = useState("Login")
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

 const signup = async () => {
    const data = {"name": name, "email": email, "password": password}
    console.log(data)
    console.log(JSON.stringify(data))
    try {
      const res = await fetch("http://localhost:8000/api/signup", {method: "POST", mode: "cors", headers:{"Content-Type": "application/json"},body: JSON.stringify(data)})
      if (await res.status === 200) {
        console.log("User Created")
        setAction("Login")

      } else if (await res.status === 422) { 
        console.log("Anyone of the field is missing or name is to short")
      } else if (await res.status === 400){
        console.log("Already Exists!!")
      }
    } catch (e) {
    }
 }

 const validation = async () => {
    const data = {"email": email, "password": password}
    console.log(data)
    console.log(JSON.stringify(data))
    try {
      const res = await fetch("http://localhost:8000/api/signin", {method: "POST", mode: "cors", headers:{"Content-Type": "application/json"},body: JSON.stringify(data)})
      if (await res.status === 200) {
        const token = await res.json()
        localStorage.setItem("token", token.token)
        navigate('/landingpage')
      } else if (await res.status === 400) { 
        console.log("Email doesnt exist ")
      } else if (await res.status === 401){
        console.log("Password doesnt match ")
      }
    } catch (e) {
    }
 }
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email-ID' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      {/* <div className="forgot-password">Lost Password? <span>Click Here</span></div> */}
      <div className="submit-container">
      <div className={action==="Login"?"submit gray": "submit"} onClick={() => {setAction("Sign Up"); signup()}}>SignUp</div>
      <div className={action==="Signup"?"submit gray": "submit"} onClick={() => {setAction("Login"); validation()}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup