import React,{useState} from "react";
import './showHidePass.css'
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";
export default function ShowHidePassword(props) {
    const [isVisible, setVisible] = useState(false);
    const toggle = () => {
      setVisible(!isVisible);
    };
  
    return (
      <div className="form-group">
        <input type={!isVisible ? "password" : "text"} placeholder='Enter your Password...' value={props.value} required />
        <span className="icon" onClick={toggle}>
          {isVisible ? <AiFillEye/> : <AiFillEyeInvisible/>}
        </span>
      </div>
    );
  }