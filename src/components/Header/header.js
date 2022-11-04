import React from 'react';
import { BsHouseDoor , BsBoxArrowRight } from "react-icons/bs";
import './header.css';
import Clock from '../Clock/clock';

function Header() {
  return (
    <nav className='header'>
        <div>
            <Clock/>
        </div>
        <ul>
            <li><a href="#"><BsBoxArrowRight/></a></li>
            <li><a href="#"><BsHouseDoor/></a></li>
        </ul>
    </nav>
  )
}

export default Header;
