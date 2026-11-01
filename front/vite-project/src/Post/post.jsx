   import { useState,useEffect } from 'react'
   import axios from 'axios'
   import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams(); // Извлекаем id из URL-адреса страницы
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([])
    const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/api/post/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [id]);    
   if (!data) return <p>Loading...</p>;
    return (
          <>
          {data.map((item) => (
              <div>
                <p>{item.name_user}</p>
                <h1>{item.tittle}</h1>
            </div>
        ))}
          </>
    );
};

export default Post;