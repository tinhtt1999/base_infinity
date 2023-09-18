import logo from './logo.png';
import tele from './telegram.svg';
import twitter from './twitter.svg';
import Home from './Home';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className='nav_wrap'>
          <div className="logo">
                <Link className='n_logo' to='/'><img src={logo} className="m_logo" alt="" /> <span>Base Infinity</span></Link>
            </div>
            <div className='nav'>
              <Link to=''>Homepage</Link>
              <Link to=''>Fraction NFT</Link>
              <Link to=''>Fair launch IDO</Link>
              <Link to=''>Docs</Link>
          </div>
        </div>
        <div className='wallet'>
            <div className='connect_wl'>
              <svg id="Warstwa_2" data-name="Warstwa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258.59 209.72">
              <g id="Layer_1" data-name="Layer 1"><g><path d="m238.86,71.27c-4.11-1.83-8.65-2.86-13.44-2.86h-16.27c-18.32,0-33.18,14.85-33.18,33.18s14.85,33.18,33.18,33.18h16.27c4.79,0,9.33-1.03,13.44-2.86,11.62-5.16,19.74-16.78,19.74-30.32s-8.12-25.16-19.74-30.32Zm-21.58,44.73c-7.96,0-14.41-6.45-14.41-14.42s6.45-14.42,14.41-14.42,14.42,6.45,14.42,14.42-6.45,14.42-14.42,14.42Z"></path><g><path d="m128.93,164.8c0-8.36-6.8-15.17-15.17-15.17s-15.17,6.81-15.17,15.17,6.8,15.17,15.17,15.17,15.17-6.8,15.17-15.17Z"></path><path d="m238.8,19.24c-.21-3.83-1.45-7.37-3.49-10.35-2.47-3.62-6.09-6.39-10.32-7.82-2.05-.69-4.24-1.08-6.52-1.08H20.39c-5.96,0-11.29,2.56-15.02,6.63C3,9.22,1.28,12.41.49,15.96c-.31,1.43-.49,2.9-.49,4.43v42.67h17.68l27.92-27.92h27.64c1.61-12.73,12.5-22.61,25.66-22.61,14.27,0,25.88,11.61,25.88,25.88s-11.61,25.88-25.88,25.88c-11.68,0-21.58-7.78-24.78-18.44h-24.09l-27.92,27.92H0v24.61h47.35c2.47-11.71,12.88-20.52,25.32-20.52,14.27,0,25.88,11.61,25.88,25.88s-11.61,25.88-25.88,25.88c-12.43,0-22.84-8.82-25.32-20.52H0v25.91h29.9l24.46,24.46h34.08c2.47-11.71,12.88-20.52,25.32-20.52,14.27,0,25.88,11.61,25.88,25.88s-11.61,25.88-25.88,25.88c-12.43,0-22.84-8.82-25.32-20.52h-38.52l-24.46-24.46H0v43.64c0,11.21,9.05,20.3,20.23,20.38.06,0,.1,0,.16,0h198.07c11.26,0,20.39-9.13,20.39-20.39v-41.97c-4.27,1.25-8.77,1.96-13.44,1.96h-16.27c-26.32,0-47.74-21.41-47.74-47.74s21.41-47.74,47.74-47.74h16.27c4.67,0,9.17.71,13.44,1.96V20.39c0-.39-.04-.77-.06-1.14Z"></path><circle cx="98.91" cy="38.4" r="15.17" transform="translate(1.81 81.18) rotate(-45)"></circle><circle cx="72.67" cy="103.72" r="15.17"></circle></g></g></g></svg>
              <p>Connect Wallet</p>
            </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <footer>
        <div className='join_lnk'>
          <a href=''>
            <img src={twitter} alt=''/>
          </a>
          <a href=''>
            <img src={tele} alt=''/>
          </a>
        </div>
        <div className='info'>
          <p>© 2023 Copyright NebulaDEX</p>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
