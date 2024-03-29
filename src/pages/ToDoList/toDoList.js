import React , {useState , useEffect} from 'react';
import './toDoList.css'; 
import TaskList from './taskList/taskList';
import Header from '../../components/Header/header';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AiOutlineClose , AiOutlineDown} from "react-icons/ai";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
    color: '#2193b0',
  },
}));

function ToDoList() {

  const classes = useStyles();  
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClickAction = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleCloseAction = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClickDate = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseDate = () => {
    setAnchorEl2(null);
  };
  const loadedBasket=[]
  const [task , setTask] = useState([]);
  useEffect (() =>{
    fetch("https://work-management-d90c4-default-rtdb.firebaseio.com/duty.json")
    .then((response)=>{
      return response.json();
    })
    .then((resData)=>{
      for (let items in resData) {
        console.log(items)
        loadedBasket.push({
          id:resData[items].id,
          action:resData[items].action,
          date:resData[items].date,
          title:resData[items].title,
          check:resData[items].check
        })
      }
      setTask(loadedBasket)
    })
  },[task]);

const addHandle = async (title) =>{
 
}

  const doneHandle = async(id ,title)=>{
   
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className='modal'>
        <div className='manage-to-do'>
          <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAction}>
            Action <AiOutlineDown/>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleCloseAction}
          >
            <MenuItem onClick={handleCloseAction}>Shopping</MenuItem>
            <MenuItem onClick={handleCloseAction}>Work</MenuItem>
            <MenuItem onClick={handleCloseAction}>Sport</MenuItem>
            <MenuItem onClick={handleCloseAction}>Music</MenuItem>
          </Menu>
          </div>
          <div className='title'>
            <label>Title</label>
            <input type="text" />
          </div>
          <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickDate}>
          Date <AiOutlineDown/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleCloseDate}
        >
          <MenuItem onClick={handleCloseDate}>Today</MenuItem>
          <MenuItem onClick={handleCloseDate}>Tomorrow</MenuItem>
        </Menu>
          </div>        
        </div>
        <button className="add-task" onClick={addHandle}>ADD</button>
      </div>
    </div>
  );

  return (
    <div>
      <Header/>
      <div className="to-do"> 
        <button type="button" onClick={handleOpen} className="to-do-btn">
          To Do List<AiOutlineClose onClick={handleClose}/>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <TaskList duty={task} onDone={doneHandle}/>
    </div>
  );
}

export default ToDoList
