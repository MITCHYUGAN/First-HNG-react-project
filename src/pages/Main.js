import slackIcon from '../img/slack_icon.png'
import githubIcon from '../img/github_icon.png'
import image from '../img/Image.jpg'
import{ Link } from "react-router-dom"
import '../App.css';

const Main = () => {
    return (
        <section className="container">
            <section className='contents'>
                <div className="profile">
                    <img src={image} alt="" id="profile__img" />
                    <p id="twitter">Mitchyugan</p>
                    <p id="slack">Mitchell Dennis</p>
                </div>
                <div className="links_container">
                    <a href="" target="_blank" className="link" id="">
                        Twitter link
                    </a>
                    <a href="https://training.zuri.team/" target="_blank" className="link" id="btn__zuri’">
                        Zuri Team
                    </a>
                    <a href="https://books.zuri.team/" target="_blank" className="link" id="books">
                        Zuri Books
                        <span className="subtext">Where to find books about design and coding</span>
                    </a>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
                        target="_blank" className="link" id="book__python">
                        Python Books
                    </a>
                    <a href="https://background.zuri.team" target="_blank" className="link" id="pitch">
                        Background Check for Coders
                    </a>
                    <a href="https://books.zuri.team/design-rules" target="_blank" className="link" id="book__design">
                        Design Books
                    </a>
                    <li className="link">
                        <Link to ='/First-HNG-react-project/contact' className='contact_text'> Contact </Link>
                    </li>
                    {/* <a href="/Contactme" target="_blank" className="link" id="book__design">
                        Contact Me
                    </a> */}
                </div>
                <div className="socials">
                    <img src={slackIcon} alt="" width="20px" />
                    <img src={githubIcon} alt="" width="20px" />
                </div>
            </section>
        </section>
    )
}


export default Main;
