import React  from 'react';
import { BsHouseDoor , BsBoxArrowRight } from "react-icons/bs";
import './header.css';
import Clock from '../Clock/clock';
import { Link } from 'react-router-dom';

function Header(props) {
  const toggleAuth=()=>{
    props.setIsloggedIn(false) 
}

  return (
    <nav className='header' >
        <div>
            <Clock/>
        </div>
        <ul >
            <li ><Link to="/" onClick={toggleAuth}><BsBoxArrowRight/></Link></li>
            <li><Link to="/home"><BsHouseDoor/></Link></li>
        </ul>
    </nav>
  )
}

export default Header;
