import { useState,useEffect } from 'react'
import axios from 'axios'
import mt from '../home/home.module.scss'
import blog from './blog.module.scss'
function Blog() {
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
        <div className={blog.postb} >
                <div key={item.id}>
                    <ul>
                        <li className={blog.on}>Featured Post</li>
                        <li><h2>{item.tittle}</h2></li>
                        <li><p className={blog.byby}>By </p><p className={blog.bybyf}>{item.name_user}</p><p> |  {item.date} </p></li>
                        <li><p className={blog.textb}>{item.text}</p></li>
                        <li><button>Read More</button></li>
                    </ul>
                    <img src={item.img} alt="" />
                </div>
        </div>
         ))}       
        <div className={mt.cater}>
            <section>
                 <h1>All Category</h1>
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
export default Blog