import bg from './bg1.png';
import bg2 from './bg2.png';
import bg3 from './bg3.png';
import bg4 from './bg4.svg';
import base from './base.webp';
import i1 from './1.png';
import i2 from './2.png';
import i3 from './3.png';
import i4 from './4.webp';
import i5 from './5.webp';
import i6 from './6.webp';
import './Home.css';
function Home(){
    return(
        <div className="Home">
            <div className="p1">
                <img src={bg} className="" alt=""/>
                <div className="p1_cnt">
                    <p>THE NATIVE COMMUNITY DRIVEN</p>
                    <p>LIQUIDITY LAYER ON BASE NETWORK <span><img src={base} className="base" alt=""/></span></p>
                    <div className="p1_l">
                        <div className="p1_l_l">
                            <a href="">Twitter</a>
                        </div>
                        <div className="p1_l_l">
                            <a href="">Telegram</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p2">
                <div className="p2_m">
                    <h4>Stable & Volatile</h4>
                    <p>Trading fees from 0.01%</p>
                </div>
                <div className="p2_m">
                    <h4>Gamification</h4>
                    <p>Choose your fraction</p>
                </div>
                <div className="p2_m">
                    <h4>Self-Optimizing</h4>
                    <p>Liquidity Flywheel</p>
                </div>
                <div className="p2_m">
                    <h4>Dilution protection</h4>
                    <p>rebases for Voters</p>
                </div>
            </div>
            <div className="ido">
                <div className="ido_h">
                    Fair Launch IDO
                </div>
                <div className="ido_1">
                    <div className="ido_s_1">
                        NebulaDex's public sale is rooted in the principles of the fair launch model. This model epitomizes the ideals of transparent, equitable access, allowing users to acquire tokens without fretting over the typical price oscillations seen during token listings
                    </div>
                    <div className="ido_s_2">
                        <h2>Ends in:</h2>
                        <p>00:00:00:00</p>
                        <div style={{display: "inline-block"}} className="p3_l_l">
                            <a href="">Participate</a>
                        </div>
                    </div>
                </div>
                <div className="ido_2">
                    <div className="ido_s_12">
                        <img src={i6} alt=""/>
                    </div>
                    <div className="ido_s_22">
                        <h4>NEB tokens distribution:</h4>
                        <p><span className="cl1">50%</span> Emissions <span className="note">(72m vesting)</span></p>
                        <p><span className="cl2">10%</span> Team <span className="note"> (12m cliff + 24m linear vesting)</span></p>
                        <p><span className="cl3">15%</span> Public Sale <span className="note">(10%TGE + 12m linear vesting)</span></p>
                        <p><span className="cl4"> 2%</span> Airdrop  <span className="note">(50%TGE + 3m linear vesting)</span></p>
                        <p><span className="cl5"> 2%</span> Advisors  <span className="note">(18m linear vesting)</span></p>
                        <p><span className="cl6"> 5%</span> DAO <span className="note">(Locked)</span></p>
                        <p><span className="cl7">7.5%</span> Development  <span className="note">(10%TGE + 6m linear vesting)</span></p>
                        <p><span className="cl8"> 2%</span> Liquidity  <span className="note">(100%TGE)</span></p>
                        <p><span className="cl9">4.5%</span> Marketing  <span className="note">(10%TGE + 6m linear vesting)</span></p>
                        <p><span className="cl10"> 2%</span> Angel Round <span className="note">(24m linear vesting)</span></p>
                        <h5>Participate in NebulaDEX Fair Launch IDO to acquire yours NEB tokens.</h5>
                        <div className="p3_l">
                        <div className="p3_l_l">
                            <a href="">Participate</a>
                        </div>
                        <div className="p3_l_l_2">
                            <a href="">Lern More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="p3">
                <img src={bg2} className="bg2" alt=""/>
                <div className="p3_m">
                    <h5>Gamification</h5>
                    <h3>Choose your fraction</h3>
                    <p>On NebulaDex, each user have a choice to align with one of the three fractions</p>
                    <div className="p3_l">
                        <div className="p3_l_l">
                            <a href="">John now</a>
                        </div>
                        <div className="p3_l_l_2">
                            <a href="">Lern More</a>
                        </div>
                    </div>
                    <div className="p3_s_m">
                        <div className="p3_s_s_m">
                            <img src={i1} className="" alt=""/>
                            <div className="p3_s_s_m_cnt">
                                <h4>Guardians</h4>
                                <p>Protectors of our home planet and guardians of nature, members of Guardians use their abilities to maintain balance and sustainability in our trading ecosystem.</p>
                            </div>
                        </div>
                        <div className="p3_s_s_m">
                            <img src={i2} className="" alt=""/>
                            <div className="p3_s_s_m_cnt">
                                <h4>Infernal</h4>
                                <p>Harnessing the fiery power of change and transformation, the Infernals are known for their daring strategies and fearless market moves.</p>
                            </div>
                        </div>
                        <div className="p3_s_s_m">
                            <img src={i3} className="" alt=""/>
                            <div className="p3_s_s_m_cnt">
                                <h4>Stormborn</h4>
                                <p>Masters of adaptability, Stormborn members use their skills to navigate the volatile markets with ease, always ready to adjust their sails to the changing winds.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p3">
                <img src={bg3} className="bg3" alt=""/>
                <div className="p3_m">
                    <h5>How to earn?</h5>
                    <h3>Designed to honor people <br/> who support the protocol's long-term expansion.</h3>
                    <div className="p3_l">
                        <div className="p3_l_l_2">
                            <a href="">Lern More</a>
                        </div>
                    </div>
                    <div className="p3_s_m">
                        <div className="p3_s_s_m">
                            <img src={i4} className="" alt=""/>
                            <div className="p3_s_s_m_cnt">
                                <h4>Vote:</h4>
                                <p>
                                    1. Generate veNEB by locking NEB.<br/>
                                    2. Use veNEB to vote for your preferred pools.<br/>
                                    3. Claim your weekly bonuses.<br/>
                                </p>
                            </div>
                        </div>
                        <div className="p3_s_s_m">
                            <img src={i5} className="" alt=""/>
                            <div className="p3_s_s_m_cnt">
                                <h4>Provide LP:</h4>
                                <p>
                                    1. Provide liquidity for your desired pools.<br/>
                                    2. Earn weekly rewards in xNEB.<br/>
                                    3. Upgrade your avatar<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p4">
                <div className="p4_m">
                    <h5>The Competitive Edge of NebulaDex</h5>
                    <div className="p4_m_m">
                        <div className="p4_m_m_c">
                            <h2>Unique ve(3,3) Tokenomics</h2>
                            <p>As a result of Andre Cronje's NEB approaches the voting-escrow paradigm in a new way. Because NebulaDEX has an exponential decline built into its foundation, the token model will be viable for many years to come. By encouraging fee generation, the NEB model rewards loyal supporters and harmonizes stakeholder interests.</p>
                        </div>
                        <div className="p4_m_m_c">
                            <h2>Unique ve(3,3) Tokenomics</h2>
                            <p>As a result of Andre Cronje's NEB approaches the voting-escrow paradigm in a new way. Because NebulaDEX has an exponential decline built into its foundation, the token model will be viable for many years to come. By encouraging fee generation, the NEB model rewards loyal supporters and harmonizes stakeholder interests.</p>
                        </div>
                        <div className="p4_m_m_c">
                            <h2>Unique ve(3,3) Tokenomics</h2>
                            <p>As a result of Andre Cronje's NEB approaches the voting-escrow paradigm in a new way. Because NebulaDEX has an exponential decline built into its foundation, the token model will be viable for many years to come. By encouraging fee generation, the NEB model rewards loyal supporters and harmonizes stakeholder interests.</p>
                        </div>
                        <div className="p4_m_m_c">
                            <h2>Unique ve(3,3) Tokenomics</h2>
                            <p>As a result of Andre Cronje's NEB approaches the voting-escrow paradigm in a new way. Because NebulaDEX has an exponential decline built into its foundation, the token model will be viable for many years to come. By encouraging fee generation, the NEB model rewards loyal supporters and harmonizes stakeholder interests.</p>
                        </div>
                    </div>
                </div>
                <img src={bg4} className="bg4" alt=""/>
            </div>

        </div>
    );
}
export default Home;