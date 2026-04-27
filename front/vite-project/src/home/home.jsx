import { useState,useEffect } from 'react'
import axios from 'axios'
import mt from './home.module.scss'
import art1 from '../home/assets/Homeero.png'
import eco from '../home/assets/eco.png'
import bus from '../home/assets/bus.png'
import star from '../home/assets/star.png'
import tech from '../home/assets/tech.png'

export default function Home() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [message,setMessage] = useState('')
  const [data, setData] = useState([])
  const [oldPrice,setOldPrice] = useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userAge, setUserAge] = useState('')
  const [isError, setIsError] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

useEffect(() => {
  fetch('http://localhost:3000/api/main')
  .then(res => res.json())
  .then(data => setData(data))
}, [])

   return (
    <>
        <div className={mt.post} style={{ backgroundImage: `url(${art1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
            {data.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li className={mt.on}>POSTED ON {item.id_catagory}</li>
                        <li><h1>{item.tittle}</h1></li>
                        <li><p>By {item.id_user} |  {item.date} </p></li>
                        <li><p>{item.text}</p></li>
                        <li><button>Read More</button></li>
                    </ul>
                </div>
                
            ))}
        </div>
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
                {data.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li><img src={art1} alt="" /></li>
                        <li><p className={mt.by}>By {item.id_user} |  {item.date} </p></li>
                        <li><h1>{item.tittle}</h1></li>
                        <li><p>{item.text}</p></li>
                        <li><button>Read More</button></li>
                    </ul>
                </div>
                 ))}
            </div>
            <nav>
                 <div className={mt.rightCO}>
                {data.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li><p className={mt.by}>By {item.id_user} |  {item.date} </p></li>
                        <li><h1>{item.tittle}</h1></li>
                    </ul>
                </div>
                 ))}
            </div>
            </nav>
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
                 <div className={mt.orii}>
                    <div>
                        <img src={bus} alt="" />
                        <h3>Business</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={star} alt="" />
                        <h3>Startup</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={eco} alt="" />
                        <h3>Economy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={tech} alt="" />
                        <h3>Technology</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                </div>
            </section>
         </div>
    </>
    )
}
