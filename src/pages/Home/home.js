import React from 'react'
import Header from '../../components/Header/header';
import ToDoList from '../../assets/toDoList.png';
import Timer from '../../assets/timer.png';
import Stopwatch from '../../assets/stopwatch.png';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <section className='home'>
        
        <div className='home-cart'>
          <Link to='/to-do-list' className='toDoList'>
            <img src={ToDoList} alt="ToDoList"/>
            <p>To Do List</p>
          </Link>
        </div>

        <div className='home-cart'>
          <Link to='/timer'>
            <img src={Timer} alt="Timer"/>
            <p>Timer</p>
          </Link>
        </div>

        <div className='home-cart'>
          <Link to='/stopwatch'>
            <img src={Stopwatch} alt="Stopwatch"/>
            <p>Stopwatch</p>
          </Link>
        </div>

      </section>
    </div>
  )
}

export default Home;
