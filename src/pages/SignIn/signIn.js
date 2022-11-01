import './signIn.css'
import ShowHidePassword from '../../components/ShowHidePass/showHidePass';
import { AiOutlineArrowLeft } from "react-icons/ai";
function SignIn (props){
 
  return (
    <section className='signIn'>
        <div className='cart'>
            <h1>Create Account</h1>
            <form className='signIn-form'>
                <input type="text" placeholder='Enter your username...'/>
                <ShowHidePassword value={props.pass} placeholder={"Enter your password"}/>
                <ShowHidePassword value={props.pass} placeholder={"Repeat your password"}/>
                <button type="submit">Sign In</button>
            </form>
            <a href="#"><AiOutlineArrowLeft className='back-icon'/></a>
        </div>
    </section>  
  )
}

export default SignIn;
