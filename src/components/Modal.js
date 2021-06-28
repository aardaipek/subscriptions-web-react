import {Button} from 'react-bootstrap';


function Modal(props) {

    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }

    return <div className="modal">
        <p>Are you sure</p>
        <Button className="btn btn-- alt" onClick={cancelHandler}>Cancel</Button>
        <Button className="btn" onClick={confirmHandler} >Confirm</Button>
    </div>
}

export default Modal;