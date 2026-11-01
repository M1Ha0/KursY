import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Author.module.scss';

// Social icons & default avatar
import fac from '../home/assets/fac.png';
import twit from '../home/assets/twit.png';
import inst from '../home/assets/inst.png';
import lin from '../home/assets/lin.png';
import avatF from '../home/assets/avatF.png';

const Author = () => {
    const { id } = useParams();
    const [datauser, setDatauser] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('http://localhost:3000/api/getuser')
            .then((res) => res.json())
            .then((users) => setDatauser(users))
            .catch((err) => console.log('Error fetching users:', err));
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:3000/api/main')
            .then((res) => res.json())
            .then((posts) => setData(posts))
            .catch((err) => console.log('Error fetching posts:', err));
    }, []);

    // Поиск автора по id из URL или первый автор по умолчанию
    const author =
        datauser.find((u) => String(u.id) === String(id)) ||
        datauser[0];

    // Посты выбранного автора напрямую из базы данных
    const authorPosts = data.filter(
        (post) => author && String(post.id_user) === String(author.id)
    );

    return (
        <div className={styles.authorPage}>
            {/* Author Profile Banner */}
            {author && (
                <div className={styles.bannerWrapper}>
                    <div className={styles.bannerContent}>
                        <img
                            className={styles.authorPhoto}
                            src={author.avatar || avatF}
                            alt={author.name_user}
                        />
                        <div className={styles.authorInfo}>
                            <h1>
                                Hey there, I’m {author.name_user} and welcome to my Blog
                            </h1>
                            <p className={styles.bio}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                                blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                                At risus viverra adipiscing at in tellus.
                            </p>
                            <div className={styles.socialRow}>
                                <img src={fac} alt="Facebook" />
                                <img src={twit} alt="Twitter" />
                                <img src={inst} alt="Instagram" />
                                <img src={lin} alt="LinkedIn" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative yellow & purple accent bar */}
                    <div className={styles.colorBar}>
                        <div className={styles.purplePart}></div>
                    </div>
                </div>
            )}

            {/* "My Posts" Section */}
            <section className={styles.postsSection}>
                <h2>My Posts</h2>
                <div className={styles.postsList}>
                    {authorPosts.length > 0 ? (
                        authorPosts.map((item) => (
                            <Link
                                to={`/post/${item.id_post}`}
                                key={item.id_post}
                                className={styles.postLink}
                            >
                                <div className={styles.postCard}>
                                    <img
                                        className={styles.postImage}
                                        src={item.img}
                                        alt={item.tittle}
                                    />
                                    <div className={styles.postContent}>
                                        <span className={styles.categoryBadge}>
                                            {item.name_catagory}
                                        </span>
                                        <h3>{item.tittle}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className={styles.noPosts}>
                            <p>У этого автора пока нет опубликованных постов.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Author;
