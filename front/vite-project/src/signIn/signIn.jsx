import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [message,setMessage] = useState('')
  const [data, setData] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userAge, setUserAge] = useState('')
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

     const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);
      
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                name_user: loginUsername,
                password: loginPassword,
            });
            
            const newToken = response.data.token;
            setToken(newToken);
            setUser(response.data.user);
            localStorage.setItem('token', newToken);

            setMessage('✅ Вход успешен!');
            loadData(); 

            setLoginUsername('');
            setLoginPassword('');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Ошибка входа');
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };
    console.log(handleLogin.response)
     const handleLogout = () => {
        setUser(null);
        setToken(null);
        setData([]);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setMessage('Выход выполнен');
    };
  return (
    <>
      <div className="auth-container">
            <div >
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
        <Link to = {'signup'}>Регистрация</Link>
    </>
  )}
