import { useState,useEffect } from 'react'
import axios from 'axios'
import mt from './home.module.scss'
import art1 from '../home/assets/art1.png'
import eco from '../home/assets/eco.png'
import bus from '../home/assets/bus.png'
import star from '../home/assets/star.png'
import tech from '../home/assets/tech.png'
import l from '../home/assets/Featured.png'
import l1 from '../home/assets/Logo1.png'
import l2 from '../home/assets/Logo2.png'
import l3 from '../home/assets/Logo3.png'
import l4 from '../home/assets/Logo4.png'
import l5 from '../home/assets/Logo5.png'
import fac from '../home/assets/fac.png'
import inst from '../home/assets/inst.png'
import twit from '../home/assets/twit.png'
import lin from '../home/assets/lin.png'
import spec from '../home/assets/spec.png'

export default function Home() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [message,setMessage] = useState('')
  const [data, setData] = useState([])
  const [datai, setDatai] = useState([])
  const [datacat, setDatacat] = useState([])
  const [datauser, setDatauser] = useState([])
  const [oldPrice,setOldPrice] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userAge, setUserAge] = useState('')
  const [isError, setIsError] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
// if(key=="date") return new Date(value)
//     return value
useEffect(() => {
  fetch('http://localhost:3000/api/main')
  .then(res => res.json())
  .then(data => setData(data))
}, [])
useEffect(() => {
  fetch('http://localhost:3000/api/getuser')
  .then(res => res.json())
  .then(datauser => setDatauser(datauser))
}, [])
useEffect(() => {
  fetch('http://localhost:3000/api/getcat')
  .then(res => res.json())
  .then(datacat => setDatacat(datacat))
}, [])
useEffect(() => {
  fetch('http://localhost:3000/api/getid:4')
  .then(res => res.json())
  .then(datai => setDatai(datai))
}, [])

   return (
    <>
    {datai.map((item) => (
        <div className={mt.post} style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
            
                <div key={item.id}>
                    <ul>
                        <li className={mt.on}>POSTED ON {item.name_catagory}</li>
                        <li><h1>{item.tittle}</h1></li>
                        <li><p>By </p><p className={mt.nf}>{item.name_user}</p><p> |  {item.date} </p></li>
                        <li><p>{item.text}</p></li>
                        <li><button>Read More</button></li>
                    </ul>
                </div>
        </div>
         ))}
         <div className={mt.co}>
            <div className={mt.tit}>
                <h1>Featured Post</h1>
                <div>
                <h1>All Posts</h1>
                <a>View All</a>
                </div>
            </div>
         <section className={mt.podco}>
            <div className={mt.leftCO}>
                {datai.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li><img src={item.img} alt="" /></li>
                        <li><p className={mt.by}>By</p> <p className={mt.name}>{item.name_user}</p><p className={mt.by}> |  {item.date} </p></li>
                        <li><h1>{item.tittle}</h1></li>
                        <li><p>{item.text}</p></li>
                        <li><button>Read More</button></li>
                    </ul>
                </div>
                 ))}
            </div>
                 <div className={mt.rightCO}>
                {data.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li><p className={mt.by}>By</p> <p className={mt.name}>{item.name_user}</p><p className={mt.by}> |  {item.date} </p></li>
                        <li><h1>{item.tittle}</h1></li>
                    </ul>
                </div>
                 ))}
            </div>
         </section>
         </div>
         <div className={mt.hi}>
            <div className={mt.about}>
                <div className={mt.xy}>   <div></div></div>
                <section className={mt.abtwo}>
                    <div>
                        <p className={mt.ab}>ABOUT US</p>
                        <h2>We are a community of content writers who share their learnings</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button>Read More</button>
                    </div>
                    <div>
                        <p className={mt.ab}>OUR MISION</p>
                        <h3>Creating valuable content for creatives all around the world</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section> 
            </div>
         </div>
         <div className={mt.cater}>
            <section>
                 <h1>Choose A Catagory</h1>
                 <div  className={mt.orii}>
                     {datacat.map((item) => (
                    <div className={mt.catka} key={item.id}>
                        <img src={item.imgcat} alt="" />
                        <h3>{item.name_catagory}</h3>
                        <p>{item.description}</p>
                    </div>
                    ))}
                </div>
            </section>
         </div>
         <div className={mt.whywe}>
            <section>
              <div>
                <p>WHY WE STARTED</p>   
                <h1>It started out as a simple<br/> idea and evolved into<br/> our passion</h1> 
                <p className={mt.whe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>       
                <button>Discover our story &gt;</button>
            </div>  
            </section>
            
         </div>
         <div className={mt.liAuth}>
            <h2>List of Authors</h2>
            <section>
                {datauser.map((item) => (
                <div  className={mt.use} key={item.id}>
                    <ul>
                        <li><img src={item.avatar} alt="" /></li>
                        <li><h3 className={mt.by}>{item.name_user}</h3></li>
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
         <div className={mt.logocount}>
            <img src={l} alt="" />
            <img src={l1} alt="" />
            <img src={l2} alt="" />
            <img src={l3} alt="" />
            <img src={l4} alt="" />
            <img src={l5} alt="" />
         </div>
         <div className={mt.testi}>
            <section>
                <div className={mt.ritghtes}>
                    <p>TESTIMONIALS</p>
                    <h2>
                        What people say about our blog
                    </h2>
                    <p className={mt.whe}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className={mt.line}></div>
                <div className={mt.leftes}>
                    <h4>
                        Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua.
                    </h4>
                    <div className={mt.jon}>
                        <div className={mt.jonathan}>
                            <img src={spec} alt="" />
                            <ul>
                                <li>
                                    <h4>Jonathan Vallem</h4>
                                </li>
                                <li>
                                    <p className={mt.whe}>New york, USA</p>
                                </li>
                            </ul>
                        </div>
                        <div className={mt.divbut}>
                            <button className={mt.butt}>➜</button>
                            <button className={mt.but} >➜</button>
                        </div>
                    </div>
                </div>
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
