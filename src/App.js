// import logo from './logo.svg';
import zuriIcon from './img/zuri_intern_logo.png'
import slackIcon from './img/slack_icon.png'
import githubIcon from './img/github_icon.png'
import I4gIcon from './img/I4G_logo.png'
import image from './img/Image.jpg'
import './App.css';

const App = () =>{
  return(
      <section className= "container">
          <section className = 'contents'>
              <div className= "profile">
                  <img src={image} alt="" id= "profile__img" />
                  <p id= "twitter">Mitchyugan</p>
                  <p id="slack">Mitchell Dennis</p>
              </div>
              <div className= "links_container">
                  <a href="" target = "_blank" className="link" id = "">
                      Twitter link
                  </a>
                  <a href="https://training.zuri.team/" target = "_blank" className="link" id="btn__zuri’">
                      Zuri Team
                  </a>
                  <a href="https://books.zuri.team/" target = "_blank" className="link" id="books">
                      Zuri Books
                      <span className= "subtext">Where to find books about design and coding</span>   
                  </a>
                  <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" 
                      target = "_blank" className="link" id="book__python">
                      Python Books
                  </a>
                  <a href="https://background.zuri.team" target = "_blank" className="link" id="pitch">
                      Background Check for Coders
                  </a>
                  <a href="https://books.zuri.team/design-rules" target = "_blank" className="link" id="book__design">
                      Design Books
                  </a>
              </div>
              <div className="socials">
                  <img src={slackIcon} alt="" width="20px" />
                  <img src={githubIcon} alt="" width="20px" />
              </div>
          </section>
          <footer className="footer">
              <img src={zuriIcon} alt="" className='zuriIcon' />
              <h4 className="footer_text">HNG Internship 9 Frontend Task</h4>
              <img src={I4gIcon} alt="" className='i4gIcon'/>
          </footer>
      </section>
  )
}


export default App;
