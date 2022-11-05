import Main from './pages/Main'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import zuriIcon from './img/zuri_intern_logo.png'
import I4gIcon from './img/I4G_logo.png'


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/First-HNG-react-project" element={<Main />} />
                <Route path="/First-HNG-react-project/contact" element={<Contact />} />
            </Routes>
            <footer className="footer">
                <img src={zuriIcon} alt="" className='zuriIcon' />
                <h4 className="footer_text">HNG Internship 9 Frontend Task</h4>
                <img src={I4gIcon} alt="" className='i4gIcon' />
            </footer>
        </>
    )
}


export default App;
