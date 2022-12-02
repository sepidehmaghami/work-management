import React , {useState} from 'react';
import './toDoList.css'; 
import Header from '../../components/Header/header';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

  const body = (
    <div style={modalStyle} className={classes.paper}>
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickAction}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl1}
        keepMounted
        open={Boolean(anchorEl1)}
        onClose={handleCloseAction}
      >
        <MenuItem onClick={handleCloseAction}>Profile</MenuItem>
        <MenuItem onClick={handleCloseAction}>My account</MenuItem>
        <MenuItem onClick={handleCloseAction}>Logout</MenuItem>
      </Menu>
    </div>
    <div>
      <input type="text" />
    </div>
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickDate}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleCloseDate}
      >
        <MenuItem onClick={handleCloseDate}>Profile</MenuItem>
        <MenuItem onClick={handleCloseDate}>My account</MenuItem>
        <MenuItem onClick={handleCloseDate}>Logout</MenuItem>
      </Menu>
    </div>      <button onClick={handleClose}>Close</button>
    </div>
  );

  return (
    <div>
      <Header/>
      <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
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
    </div>
  )
}

export default ToDoList
