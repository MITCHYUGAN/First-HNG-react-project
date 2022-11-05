import{ Link } from "react-router-dom"
const Modal = ({ closeModal }) =>{
    return(
    <div className='modal'>
        <div className='modalContent'>
            <h3>Your Message has been Sent</h3>
            <div className='modalButtons'>
            <li className='modalbtn'>
                <Link to ='/First-HNG-react-project' className='linkback_home'>Back Home</Link>
            </li>
                <button onClick={() => closeModal(false)}>Another message</button>   
            </div>
        </div>
    </div>
    )
}

export default Modal