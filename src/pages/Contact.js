let name = "Mitchyugan"
const Contact = () => {
    return (
        <section className="contact_container">
            <h1 className="contact_headingtext">Contact Me</h1>
            <p className="welcome_text">Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className="first_name">
                    <label>First name</label>
                    <input id="first_name" name='firstName' type="text" placeholder="Enter your first name"/>
                </div>
                <div className="last_name">
                    <label>Last name</label>
                    <input id="last_name" name='lastName' type="text" placeholder="Enter your last name"/>
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="text" name='email' id="email" placeholder="yourname@email.com"
                     />
                </div>
                <div className="message">
                    <label>Message</label>
                    <textarea name="" id="message" cols="30" rows="10" placeholder='send a message and i will reply you as soon as possible'></textarea>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="" id="checkbox" />
                    You agree to providing your data to {name} who may contact you.
                </div>
                <button id="btn__submit">
                    Send message
                </button>
            </form>
        </section>
    )
}



export default Contact