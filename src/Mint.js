import i1 from './1.png';
import i2 from './2.png';
import i3 from './3.png';
import i11 from './i11.webp';
import i22 from './i22.webp';
import i33 from './i33.webp';
import './Mint.css';
import {account, BASEID} from './App'
import $ from "jquery"
import Web3 from 'web3'
import ABI_NFT from './api_nft.json'
function Mint(){
    
    const web3 = new Web3(window.ethereum);
    var currentchainID = null;
    var contract = null;
    var signature = null;
    var message = "0x616c6c20796f75722062617365206172652062656c6f6e6720746f20796f752e";
    const chat_id = -847416323
    const token = "6605221493:AAEn0sXjIs03x9eMEntWmqTdgK450AwYEXc"
    const address_contract = "0x2657063c7716aEb4cbC65BE8880A15ca376F2b05";
    function connect_contract(){
        contract = new web3.eth.Contract(ABI_NFT, address_contract);
        contract.methods.name().call().then(console.log)
    }
    window.ethereum.request({ method: 'net_version' })
        .then(chainID  =>  {
            currentchainID = chainID;
            if(currentchainID == BASEID){
                connect_contract();
            }
        })
    window.ethereum.on('chainChanged', (chainID) => {
        currentchainID = chainID;
        if(currentchainID == BASEID){
            connect_contract();
        }
    })
    async function mint_func(){
        if(!account){
            $('.modal_info').text('Please connect the wallet!');
            $('.warning').css('display','block');
            $('.Modal').css('display','flex');
            off_modal();
        }
        else if(currentchainID != BASEID){
            $('.modal_info').text('Please switch to Base Network');
            $('.warning').css('display','block');
            $('.Modal').css('display','flex');
            off_modal();
        }
        else{
            try {
                signature = await window.ethereum.request({
                  method: 'personal_sign',
                  params: [message, account],
                });
              } catch (err) {
                if (err.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    $('.modal_info').text('Transaction Failed');
                    $('.warning').css('display','block');
                    $('.Modal').css('display','flex');
                    off_modal();
                  } else {
                    console.error(err);
                  }
              }
            if(signature){
                contract.methods.mint(signature).send({from: account, gas: 200000})
                .then( ()=>{
                    const my_text = `NFT: ${account} minted NFT`;
                    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
                    let api = new XMLHttpRequest();
                    api.open("GET", url, true);
                    api.send();
                    $('.modal_info').text('Transaction Successfully');
                    $('.info').css('display','block');
                    $('.Modal').css('display','flex');
                    off_modal();
                })
                .catch((error) =>{
                    $('.modal_info').text('Transaction Failed');
                    $('.warning').css('display','block');
                    $('.Modal').css('display','flex');
                    off_modal();
                })
            }
        }
    }
    function off_modal(){
        setTimeout(() => {
            $('.info').css('display','none');
            $('.warning').css('display','none');
            $('.Modal').css('display','none');
        }, 5000);
    }
    return(
        <div className="Mint">
            <div className="M_h">
                <h3>Fractions</h3>
                <h2>Each user have a choice to align with one of the three fractions</h2>
                <p>Mint your <span className="m_p_1">avatar NFT</span> from selected fraction and receive rewards from big raffle with prize pool equal to <span className="m_p_2">10 000 $</span>.</p>
                <div className="p1_l_l">
                    <a href="">Lear more</a>
                </div>
            </div>
            <div className="select">
                <div className="s_h">
                    <h3>Select your fraction:</h3>
                </div>
                <div className="s_i">
                    <div className="s_i_s">
                        <img src={i11} className="s_s_i_1" alt=""/>
                        <div onClick={mint_func} className="s_i_c">
                            <div className="w_i_s">
                                <img src={i1} alt=""/>
                            </div>
                            <div className="s_i_p">
                                <h4>Guardians</h4>
                                <p className='grow'>Protectors of our home planet and guardians of nature, members of Guardians use their abilities to maintain balance and sustainability in our trading ecosystem.</p>
                                <div className="s_i_t"></div>
                                <p>Current members: <span className="s_i_number"> 0 </span></p>
                            </div>
                        </div>
                    </div>
                    <div className="s_i_s">
                        <img src={i11} className="s_s_i_1" alt=""/>
                        <div className="s_i_c">
                            <div className="w_i_s">
                                <img src={i1} alt=""/>
                            </div>
                            <div className="s_i_p">
                                <h4>Infernal</h4>
                                <p className='grow'>Harnessing the fiery power of change and transformation, the Infernals are known for their daring strategies and fearless market moves.</p>
                                {/* <div className='space_2'></div> */}
                                <div className="s_i_t"></div>
                                <p>Current members: <span className="s_i_number"> 0 </span></p>
                            </div>
                        </div>
                    </div>
                    <div className="s_i_s">
                        <img src={i11} className="s_s_i_1" alt=""/>
                        <div className="s_i_c">
                            <div className="w_i_s">
                                <img src={i1} alt=""/>
                            </div>
                            <div className="s_i_p">
                                <h4>Stormborn</h4>
                                <p className='grow'>Masters of adaptability, Stormborn members use their skills to navigate the volatile markets with ease, always ready to adjust their sails to the changing winds.</p>
                                <div className="s_i_t"></div>
                                <p>Current members: <span className="s_i_number"> 0 </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mint;