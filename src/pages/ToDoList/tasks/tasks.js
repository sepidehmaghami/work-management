import { useState } from 'react';
import './tasks.css';

const Tasks = ({action , titles , date , txt ,onDone , checks}) =>{

    const [check , setCheck]= useState(checks);
    const doneTask =() =>{
        if(!check){
            setCheck(true);
            const title =txt.title;
            onDone(txt.id,{title, check:true});
        }       
        else{
            setCheck(false);           
            const title =txt.title;
            onDone(txt.id,{title, check:false});
        }
        }

    const extra_styles = (check) => {
        if (check) {
            return {
                textDecoration: "line-through",
                color:"gray"
            };
            }
        else {
            return {
                textDecoration: "none",
                color:"black"
            }
        }
    };
      

    return(
        <div className="tasks-control">
            <div className='action'  style={extra_styles(check)}>{action}</div>
            <div className='duty'  style={extra_styles(check)}>{titles}</div>
            <div className='time'  style={extra_styles(check)}>{date}</div>
            {!check ? 
                (<button className='btn-duty' onClick={doneTask} type="submit">Done</button>)
                :
                (<button className='btn-duty' onClick={doneTask} type="submit">Active</button>)
            }
        </div>
    )
}

export default Tasks;