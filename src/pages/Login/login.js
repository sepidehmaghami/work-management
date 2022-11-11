import React,{useContext, useState} from 'react'
import './login.css'
import ShowHidePassword from '../../components/ShowHidePass/showHidePass'
import { BsFillPersonFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/auth-context'

function Login (props){
  const authContext = useContext(AuthContext)
  const [user,setUser]=useState([]);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState(0)
  const onUser = event => {
    setUsername(event.target.value);
}
const onPass = event => {
    setPassword(event.target.value);
}

const loginHandler = () => {
        authContext.login()
  }
  
  return (
    <section className='login'>
        <div className='logo-login'><BsFillPersonFill/></div>
        <div className='cart-login'>
            <h1>Hello!</h1>
            <h3>Sign in your account</h3>
            <form className='login-form'>
                <input type="text" placeholder='Enter your username...' onChange={onUser}/>
                <ShowHidePassword placeholder={"Enter your password"} value={props.pass} onChange={onPass}/>
                <button type="submit" onClick={loginHandler}>Login</button>
            </form>
            <p><Link to='/sign-in'>Create Account</Link></p>
        </div>
    </section>  
  )
}

export default Login
