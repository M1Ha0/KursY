import { useState,useEffect } from 'react'
import axios from 'axios'
import st from '../header/header.module.scss'
import fin from '../header/assets/fin.png'
import { Link } from 'react-router-dom'
function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
            <img src={fin} alt="" />
            <ul>
                <li>
                    <Link to = {'/'}>Home</Link>
                </li>
                <li>
                    <Link to = {'blog'}>Blog</Link>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Contact us</a>
                </li>
                <li>
                    <Link to = {'sign'}><button>Subscribe</button></Link>
                </li>
            </ul>
                   
        </nav>
      </header>
    </>
  )
}
export default Header