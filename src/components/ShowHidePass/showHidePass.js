import React,{useState} from "react";
import './showHidePass.css'
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
export default function ShowHidePassword(props) {
    const [isVisible, setVisible] = useState(false);
    const toggle = () => {
      setVisible(!isVisible);
    };
    
    const [pass, setPass] = useState();
    const password = (e) => {
      setPass(e.target.value)
    }

    return (
      <div className="form-group">
        <input type={!isVisible ? "password" : "text"} placeholder={props.placeholder} onChange={password}/>
        <span className="icon" onClick={toggle}>
          {isVisible ? <AiFillEye/> : <AiFillEyeInvisible/>}
        </span>
      </div>
    );
  }