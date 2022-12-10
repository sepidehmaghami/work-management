import Tasks from "../tasks/tasks";

const TaskList=({duty ,onDone}) =>{
    return(
        <div>
              {duty.map( (item) => {
            return( 
           <div>
             <Tasks key={item.id} txt={item} action={item.action} titles={item.title} date={item.date} onDone={onDone}/>
           </div>
                )
        } )}
        </div>
    )
}

export default TaskList;