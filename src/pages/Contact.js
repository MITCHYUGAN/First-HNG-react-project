import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Modal from './Modal.js'

let name = "Mitchyugan"
const Cont = () => {

    // USING THE USEFORM FEATURE
    const { register, handleSubmit, reset , watch, formState: { errors } } = useForm({
        mode: "onTouched"
    });

    // HANDLE SUBMIT

    const onSubmit = (data) =>{
        // console.log(data);
        reset()
    }

    // WATCH EVENT 
    const firstName = watch("firstName")
    const lastName = watch("lastName")
    const email = watch("email")
    const message = watch("message")

    // HANDLE DISABLE SUBMIT
    const isValid = firstName && lastName && email && message

    // OPENING MODAL FUNCTION
    const [openModal, openModalActive] = useState(false)


    return (
        <section className="contact_container">
            <h1 className="contact_headingtext">Contact Me</h1>
            <p className="welcome_text">Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="first_name">
                    <label>First name</label>
                    <input id="first_name" name='firstName' type="text" placeholder="Enter your first name" 
                    {...register("firstName", { 
                        required: 'First name is required',
                        minLength:{
                            value: 3,
                            message: 'first name must be at least 3 chracters long'
                        },
                        maxLength:{
                            value: 20,
                            message: 'first name must not be more than 20'
                        },
                        pattern:{
                            value: /[a-zA-Z]+/,
                            message: 'Enter only aphabets'
                        }
                    })}
                    className={`${errors.firstName && 'bordererrors'}`}
                    />
                     <p className='errors'>{errors.firstName?.message}</p>
                </div>
                <div className="last_name">
                    <label>Last name</label>
                    <input id="last_name" name='lastName' type="text" placeholder="Enter your last name" 
                    {...register("lastName", { 
                        required: 'Last name is required',
                        minLength:{
                            value: 3,
                            message: 'first name must be at least 3 chracters long'
                        },
                        pattern:{
                            value: /[a-zA-Z]+/,
                            message: 'only aphabets is Required'
                        }
                     })}
                     className={`${errors.lastName && 'bordererrors'}`}
                    />
                     <p className='errors'>{errors.lastName?.message}</p>
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="text" name='email' id="email" placeholder="yourname@email.com" 
                    {...register("email", { 
                        required: 'Email is required',
                        pattern:{
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Email must be valid'
                        }
                     })}
                     className={`${errors.email && 'bordererrors'}`}
                     />
                      <p className='errors'>{errors.email?.message}</p>
                </div>
                <div className="message">
                    <label>Message</label>
                    <textarea name="" id="message" cols="30" rows="10" {...register('message',{
                         required: 'Pls enter a message'
                    })}></textarea>
                    <p className='errors'>{errors.message?.message}</p>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="" id="checkbox" />
                    You agree to providing your data to {name} who may contact you.
                </div>
                <button id="btn__submit" onClick={() => { openModalActive(true) }} disabled = {!isValid}>
                    Send message
                </button>
            </form>
            {openModal && <Modal closeModal={openModalActive} />}
        </section>
    )
}



export default Cont