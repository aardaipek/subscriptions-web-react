import { useState } from 'react';
import {Button} from 'react-bootstrap';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen,setModalIsOpen ] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true); 
    };

    function closeModalHandler() {
        setModalIsOpen(false); 
    };

return (<div className='card'>
    <h2>{props.text}</h2>
    <div className='actions'>
      <Button className='btn' variant="danger" onClick={deleteHandler}>Delete</Button>
    </div>
    {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
    {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
  </div>)
}

export default Todo;
