import './signIn.css'
import ShowHidePassword from '../../components/ShowHidePass/showHidePass';
import { AiOutlineArrowLeft } from "react-icons/ai";
import {Link} from 'react-router-dom'

function SignIn (props){ 
  return (
    <section className='signIn'>
        <div className='cart-signIn'>
            <h1>Create Account</h1>
            <form className='signIn-form'>
                <input type="text" placeholder='Enter your username...'/>
                <ShowHidePassword value={props.pass} placeholder={"Enter your password"}/>
                <ShowHidePassword value={props.pass} placeholder={"Repeat your password"}/>
                <button type="submit">Sign In</button>
            </form>
            <Link to="/"><AiOutlineArrowLeft className='back-icon'/></Link>
        </div>
    </section>  
  )
}

export default SignIn;
