import { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo (props){
 const [modalIsOpen, setModalIsOpen ] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }
    function modelIsClickedHandler(){
        setModalIsOpen(false);
    }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Backdrop onCancel={modelIsClickedHandler} />}
      {modalIsOpen && <Modal onCancel={modelIsClickedHandler} onConfirm={modelIsClickedHandler}/>}
    </div>
  );
}

export default Todo;