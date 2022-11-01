import React , {useState} from "react";
import './login.css'
import ShowHidePassword from '../../components/ShowHidePass/showHidePass'
function Login (){
  const [pass, setPass] = useState();
  const password = (e) => {
    setPass(e.target.value)
  }

  return (
    <section className='login'>
        <div className='cart'>
            <h1>Hello!</h1>
            <h3>Sign in your account</h3>
            <form className='login-form'>
                <input type="text" placeholder='Enter your username...' onChange={password}/>
                <ShowHidePassword value={pass}/>
                <button type="submit">Login</button>
            </form>
            <p><a href='#'>Create Account</a></p>
        </div>
    </section>  
  )
}

export default Login
