import logo from './logo.png';
import tele from './telegram.svg';
import twitter from './twitter.svg';
import Home from './Home';
import Mint from './Mint';
import Ido from './Ido';
import { Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import $ from "jquery"
export var account = null;
export const BASEID = 8453;
function App() {
  
  
  
  const [isActive, setIsActive] = useState(false);
  function on_menu(){
    if(!isActive){
      $('.menu__list').removeClass('animate__fadeOutRight');
      $('.menu__list').addClass('animate__fadeInRight');
      $('.menu__list').css('display', 'flex');
      setIsActive(true);
    }
    else{
      $('.menu__list').removeClass('animate__fadeInRight');
      $('.menu__list').addClass('animate__fadeOutRight');
      setTimeout(() => {
        $('.menu__list').css('display', 'none');
      }, 1000);
      setIsActive(false);
    }
  }
  function connect_wallet(){
    if(!account){
      if(window.ethereum){
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          handleAccountsChanged(result[0]);
        })
        .catch((error) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log('Please connect to MetaMask.');
          } else {
            console.error(error);
          }
        });
      }
      else{
        window.open('https://metamask.io/download/')
      }
    }
    else{
      check_network();
    }
  }
  function handleAccountsChanged(new_Account){
    account = new_Account;
    check_network();

  }
  function check_network(){
    window.ethereum.request({ method: 'net_version' })
    .then(async chainID  =>  {
      if(chainID != BASEID){
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: "0x2105" }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0x2105',
                    chainName: 'Base Mainnet',
                    nativeCurrency: {
                      name: 'ETH',
                      symbol: 'ETH',
                      decimals: 18
                    },
                    rpcUrls: ['https://mainnet.base.org'] /* ... */,
                  },
                ],
              });
            } catch (addError) {
              if (addError.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Please switch to Base network.');
              } else {
                console.error(addError);
              }
            }
          }
        }
      }
      else{
        setInfo();
      }
    })
  }
  window.ethereum.on('chainChanged', (chainId) => {
    if(chainId == BASEID){
      setInfo();
    }
    else{
      check_network();
    }
  })
  function setInfo(){
    document.getElementById('wallet').innerText = account.substring(0,5)+"..."+account.slice(-5);
  }
  return (
    <div className="App">
      <div className="header">
        <div className='nav_wrap'>
          <div className="logo">
                <a className='n_logo' href='/'><img src={logo} className="m_logo" alt="" /> <span>Base Infinity</span></a>
            </div>
            <div className='nav'>
              <Link to='/'>Homepage</Link>
              <Link to='/Mint'>Fraction NFT</Link>
              <Link to='/Ido'>Fair launch IDO</Link>
              <Link to=''>Docs</Link>
          </div>
        </div>
        <div className='wallet'>
            <div className='connect_wl' onClick={connect_wallet}>
              <svg id="Warstwa_2" data-name="Warstwa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258.59 209.72">
              <g id="Layer_1" data-name="Layer 1"><g><path d="m238.86,71.27c-4.11-1.83-8.65-2.86-13.44-2.86h-16.27c-18.32,0-33.18,14.85-33.18,33.18s14.85,33.18,33.18,33.18h16.27c4.79,0,9.33-1.03,13.44-2.86,11.62-5.16,19.74-16.78,19.74-30.32s-8.12-25.16-19.74-30.32Zm-21.58,44.73c-7.96,0-14.41-6.45-14.41-14.42s6.45-14.42,14.41-14.42,14.42,6.45,14.42,14.42-6.45,14.42-14.42,14.42Z"></path><g><path d="m128.93,164.8c0-8.36-6.8-15.17-15.17-15.17s-15.17,6.81-15.17,15.17,6.8,15.17,15.17,15.17,15.17-6.8,15.17-15.17Z"></path><path d="m238.8,19.24c-.21-3.83-1.45-7.37-3.49-10.35-2.47-3.62-6.09-6.39-10.32-7.82-2.05-.69-4.24-1.08-6.52-1.08H20.39c-5.96,0-11.29,2.56-15.02,6.63C3,9.22,1.28,12.41.49,15.96c-.31,1.43-.49,2.9-.49,4.43v42.67h17.68l27.92-27.92h27.64c1.61-12.73,12.5-22.61,25.66-22.61,14.27,0,25.88,11.61,25.88,25.88s-11.61,25.88-25.88,25.88c-11.68,0-21.58-7.78-24.78-18.44h-24.09l-27.92,27.92H0v24.61h47.35c2.47-11.71,12.88-20.52,25.32-20.52,14.27,0,25.88,11.61,25.88,25.88s-11.61,25.88-25.88,25.88c-12.43,0-22.84-8.82-25.32-20.52H0v25.91h29.9l24.46,24.46h34.08c2.47-11.71,12.88-20.52,25.32-20.52,14.27,0,25.88,11.61,25.88,25.88s-11.61,25.88-25.88,25.88c-12.43,0-22.84-8.82-25.32-20.52h-38.52l-24.46-24.46H0v43.64c0,11.21,9.05,20.3,20.23,20.38.06,0,.1,0,.16,0h198.07c11.26,0,20.39-9.13,20.39-20.39v-41.97c-4.27,1.25-8.77,1.96-13.44,1.96h-16.27c-26.32,0-47.74-21.41-47.74-47.74s21.41-47.74,47.74-47.74h16.27c4.67,0,9.17.71,13.44,1.96V20.39c0-.39-.04-.77-.06-1.14Z"></path><circle cx="98.91" cy="38.4" r="15.17" transform="translate(1.81 81.18) rotate(-45)"></circle><circle cx="72.67" cy="103.72" r="15.17"></circle></g></g></g></svg>
              <p id='wallet'>Connect Wallet</p>
            </div>
            <div className="navbar__menu " id="hamburger" onClick={on_menu}>
              <span></span>
              <span></span>
              <span></span>
              {/* <span></span> */}
            </div>
        </div>
      </div>
      <div className='menu__list animate__animated'>
        <Link onClick={on_menu} to='/'>Homepage</Link>
        <Link onClick={on_menu} to='/Mint'>Fraction NFT</Link>
        <Link onClick={on_menu} to='/Ido'>Fair launch IDO</Link>
        <Link onClick={on_menu} to=''>Docs</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mint' element={<Mint/>}/>
        <Route path='/Ido' element={<Ido/>}/>
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
        <div className='info_2'>
          <p>© 2023 Copyright Base Infinity</p>
        </div>
      </footer>
      <div className='Modal'>
        <div className='status'>
          <svg className='info' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z" fill="#000000"></path> </g></svg>
          <svg className='warning' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="17" r="1" fill="#000000"></circle> <path d="M12 10L12 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          <p className='modal_info'>Base infinity</p>
        </div>
        <div className='t_status'></div>
      </div>
    </div>
    
  );
}

export default App;
