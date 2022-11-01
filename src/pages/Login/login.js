import './login.css'
import ShowHidePassword from '../../components/ShowHidePass/showHidePass'
function Login (props){
 
  return (
    <section className='login'>
        <div className='cart'>
            <h1>Hello!</h1>
            <h3>Sign in your account</h3>
            <form className='login-form'>
                <input type="text" placeholder='Enter your username...'/>
                <ShowHidePassword value={props.pass}/>
                <button type="submit">Login</button>
            </form>
            <p><a href='#'>Create Account</a></p>
        </div>
    </section>  
  )
}

export default Login
