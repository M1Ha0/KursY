import { useState,useEffect } from 'react'
import axios from 'axios'
import ft from '../footer/footer.module.scss'
import fin from '../footer/assets/fin.png'
import face from '../footer/assets/face.png'
import twite from '../footer/assets/twite.png'
import lin from '../footer/assets/lin.png'
import inst from '../footer/assets/inst.png'
function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
      <footer>
        <nav>
            <img src={fin} alt="" />
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Blog</a>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Contact us</a>
                </li>
                <li>
                    <a>Privacy Policy</a>
                </li>
            </ul>
                   
        </nav>
        <section>
                <h2>Subscribe to our news letter to get<br></br> latest updates and news</h2>
                <div>
                    <input type="email" title='Enter Your Email'/>
                    <button>Subscribe</button>
                </div>
        </section>
        <div className={ft.down}>
            <p>Finstreet 118 2561 Fintown<br></br>Hello@finsweet.com  020 7993 2905</p>
                <div>
                    <img src={face} alt="" />
                    <img src={twite} alt="" />
                    <img src={inst} alt="" />
                    <img src={lin} alt="" />
                </div>
            </div>
      </footer>
    </>
  )
}
export default Footer