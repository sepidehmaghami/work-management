import React,{useContext} from 'react'
import Login from "./pages/Login/login";
import SignIn from "./pages/SignIn/signIn";
import Home from "./pages/Home/home";
import ToDoList from "./pages/ToDoList/toDoList";
import Stopwatch from './pages/Stopwatch/stopwatch';
import {AuthContext} from './context/auth-context'
import {Route ,Routes,Navigate } from 'react-router-dom'
function App() {
  const authContext = useContext(AuthContext)
  console.log(authContext.isAuth)
  return (
    <div className="App">

      <Routes>
        {!authContext.isAuth ? ( 
          <Route path="/" element={<Login/>}/>
        ):( 
          <Route path="/" element={<Navigate replace to="/home"/>}/>
        )}
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/to-do-list" element={<ToDoList/>}/>
        <Route path="/stopwatch" element={<Stopwatch/>}/>
      </Routes>

     
         </div>
  );
}

export default App;
