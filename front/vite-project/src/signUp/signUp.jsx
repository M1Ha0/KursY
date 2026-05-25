import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import aaa from '../signIn/signIn.module.scss'
import { useNavigate  } from 'react-router-dom';
export default function SignUp() {
  const navigate=useNavigate()
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [message,setMessage] = useState('')
  const [data, setData] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userAge, setUserAge] = useState('')
  const [email, setemail] = useState('')
  const [isError, setIsError] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  useEffect(() => {
        axios.interceptors.request.use((config) => {
            const currentToken = localStorage.getItem('token');
            if (currentToken) {
                config.headers.Authorization = `Bearer ${currentToken}`;
            }
            return config;
        });
    }, []);



   const handleSubmits = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        name_user:username,
        password:password,
        age_user:userAge,
        email:email
      });

      setMessage(response.data.message);
      setIsError(false);
      setUsername('');
      setPassword('');
    
      navigate('/sign')
    
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Ошибка регистрации';
      setMessage(errorMsg);
      setIsError(true);
    } finally {
      setLoading(false);
    }
    
  };


  return (
    <>
      <div className={aaa.authcontainer}>
        <h3>Регистрация</h3>
        <form onSubmit={handleSubmits}>
          <input
            type="text"
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input type="text"
            placeholder='Email'
            value={email}
            onChange={(e)=> setemail(e.target.value)}
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
            placeholder='Возраст'
            value={userAge}
            onChange={(e)=> setUserAge(e.target.value)}
            required
          />
          <button type="submit" >Зарегистрироваться</button>
          
        </form>
        <p>
            Уже зарегистрировался? <Link to = {'/sign'}>Войди</Link>
        </p>
        {message && (
          <div className={isError ? 'error' : 'success'}>
            {message}
          </div>
        )}
      </div>
    </>
  )}
