import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './header/header.jsx'
import Home from './home/home.jsx'
import Footer from './footer/footer.jsx'
import {Routes,Route,Link} from 'react-router-dom'
import SignIn from './signIn/signIn.jsx'
import SignUp from './signUp/signUp.jsx'
export default function App() {
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


  return (
    <>

<Header/>
<Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sign' element={<SignIn/>} />
        <Route path='/sign/signup' element={<SignUp/>} />
</Routes>
<Footer/>    
{/*
    <div className="App">
      <div className="form-container">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmits}>
          <input
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="text"
            placeholder='Age'
            value={userAge}
            onChange={(e)=> setUserAge(e.target.value)}
            required
          />
          <button type="submit" >Зарегистрироваться</button>
        </form>
        {message && (
          <div className={isError ? 'error' : 'success'}>
            {message}
          </div>
        )}
      </div>
    </div>



    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Название" value={title} 
      onChange={(e) => setTitle(e.target.value)} required/>

      <input type="number" placeholder="Цена" value={price} 
      onChange={(e) => setPrice(e.target.value)} required/>
      
      <input type="number" placeholder='Старая цена' value={oldPrice} 
      onChange={(e) => setOldPrice(e.target.value)} required />

      <button type="submit">Добавить</button>
      {message && <p>{message}</p>}
    </form>
       <div>
            {data.map((item) => (
                <div key={item.id}>
                    <ul>
                        <li>ID: {item.id}</li>
                        <li><p>Наименование продукта:</p>{item.title}</li>
                        <li><p>Нынешьняя цена:</p>{item.price}</li>
                        <li><p>Старая цена:</p>{item.oldPrice}</li>
                        <button onClick={() => onDelete(item.id)}>Удалить</button>
                    </ul>
      
                </div>
                
            ))}
        </div>


        <div className="auth-container">
            <div className="form-container">
                <h3>Вход</h3>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Логин"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                    />
                    <button type="submit" onClick={handleLogin} >Войти</button>
                </form>
            </div>
        </div>
        */}
    </>
  )
}



