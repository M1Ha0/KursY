import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import mt from '../home/home.module.scss'
import about from './aboutus.module.scss'
import fac from '../home/assets/fac.png'
import inst from '../home/assets/inst.png'
import twit from '../home/assets/twit.png'
import lin from '../home/assets/lin.png'
import im1 from './assets/im1.png'
import im2 from './assets/im2.png'

function AboutUs() {
  const [count, setCount] = useState(0)
  const [datauser, setDatauser] = useState([])

  useEffect(() => {
  fetch('http://localhost:3000/api/getuser')
  .then(res => res.json())
  .then(datauser => setDatauser(datauser))
}, [])
  
return (
    <>
        <div className={about.aboF}>
            <section>
                <div>
                   <p className={about.abso}>
                    ABOUT US
                    </p>
                    <h1>
                        We are a team of<br/> content writers who<br/> share their learnings
                    </h1>
                </div>                    
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/> enim ad minim veniam, quis nostrud exercitation ullamco<br/> laboris nisi ut aliquip ex ea commodo consequat.</p>
            </section>
        </div>
        <div className={about.aboS}> 
            <section>
                <div className={about.manyp}>
                    <ul>
                        <li>
                            <h1>12+</h1>
                            <p>Blogs Published</p>
                        </li>
                        <li>
                            <h1>18K+</h1>
                            <p>Views on Finsweet</p>
                        </li>
                        <li>
                            <h1>30K+</h1>
                            <p>Total active Users</p>
                        </li>
                    </ul>
                </div>
                <div className={about.asos}>   <div></div></div>
            </section>
        </div>
        <div className={about.hi}>
                    <div className={about.about}>
                        <section className={about.abtwo}>
                            <div>
                                <p className={about.ab}>OUR MISION</p>
                                <h2>Creating valuable content for creatives all around the world</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                            </div>
                            <div>
                                <p className={about.ab}>Our Vision</p>
                                <h3>A platform that empowers individuals to improve</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                            </div>
                        </section> 
                    </div>
                 </div>
        <div className={about.finca}>
            <section>
                <div>
                    <h2>Our team of creatives</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div>
                <img src={im2} alt="" />
            </section>
        </div>
        <div className={about.finca}>
            <section>
                <img src={im1} alt="" />
                <div>
                    <h2>Why we started this Blog</h2>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div>
            </section>
        </div>
        <div className={mt.liAuth}>
            <h2>List of Authors</h2>
            <section>
                {datauser.slice(0, 4).map((item) => (
                <div  className={mt.use} key={item.id}>
                    <ul>
                        <li><Link to={`/author/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><img src={item.avatar} alt="" /></Link></li>
                        <li><Link to={`/author/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}><h3 className={mt.by}>{item.name_user}</h3></Link></li>
                        <li><p className={mt.by}>{item.email}</p></li>
                        <div>
                            <img src={fac} alt="" />
                            <img src={inst} alt="" />
                            <img src={twit} alt="" />
                            <img src={lin} alt="" />
                        </div>
                    </ul>
                </div>
                 ))}
            </section>
         </div>
         <div className={mt.nadf}>  
                <div>
                    <h3>Join our team to be a part <br/>of our story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit, sed do eiusmod tempor incididunt.</p>
                    <button>Join Now</button>
                </div>
         </div>   
    </>
  )
}
export default AboutUs