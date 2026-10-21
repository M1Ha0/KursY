import { useState,useEffect } from 'react'
import axios from 'axios'
import conta from './contact.module.scss'
function Contact() {
const [user, setUser] = useState(null);

 return (
    <>
    <div className={conta.fcoun}>
        <section>
            <p className={conta.cont}>Contact us</p>
            <h1>Let’s Start a Conversation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua. Ut enim ad minim.</p>
        </section>
    </div>
    <div className={conta.inpcont}>
        <section>
            <div className={conta.purpxx}>
                <div>
                    <p className={conta.wo}>Working hours</p>
                    <div className={conta.linecou}></div>
                    <h5>Monday To Friday</h5>
                    <h5>9:00 AM to 8:00 PM </h5>
                    <p className={conta.ou}>Our Support Team is available 24/7</p>
                </div>
                <div className={conta.right}>
                    <p className={conta.wo}>Contact Us</p>
                    <div className={conta.linecou}></div>
                    <h5>020 7993 2905</h5>
                    <p className={conta.ou}>hello@finsweet.com</p>
                </div>
            </div>
            <input className={conta.mes} type="text"
            placeholder='Full Name'/>
            <input className={conta.mes} type="text"
            placeholder='Your Email'/>
            <input className={conta.mes} type="text"
            placeholder='Query Related'/>
            <textarea className={conta.meage} placeholder="Message"></textarea>
            <button>Send Message</button>
        </section>
    </div>
    </>
    )
}
export default Contact