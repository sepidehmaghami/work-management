import React from 'react'
import Header from '../../components/Header/header';
import ToDoList from '../../assets/toDoList.png';
import Timer from '../../assets/timer.png';
import Stopwatch from '../../assets/stopwatch.png';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header/>
      <section className='home'>
        
        <div className='home-cart'>
          <a href='#' className='toDoList'>
            <img src={ToDoList} alt="ToDoList"/>
            <p>To Do List</p>
          </a>
        </div>

        <div className='home-cart'>
          <a href='#'>
            <img src={Timer} alt="Timer"/>
            <p>Timer</p>
          </a>
        </div>

        <div className='home-cart'>
          <a href='#'>
            <img src={Stopwatch} alt="Stopwatch"/>
            <p>Stopwatch</p>
          </a>
        </div>

      </section>
    </div>
  )
}

export default Home;
