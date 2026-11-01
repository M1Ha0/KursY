import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './post.module.scss';

const Post = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(`http://localhost:3000/api/post/${id}`)
            .then((res) => res.json())
            .then((resData) => setData(resData))
            .catch((err) => console.log(err));
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:3000/api/main')
            .then((res) => res.json())
            .then((resPosts) => setAllPosts(resPosts))
            .catch((err) => console.log(err));
    }, []);

    const readNext = allPosts.filter((item) => String(item.id_post) !== String(id)).slice(0, 3);

    return (
        <div className={styles.postPage}>
            {data.map((item) => (
                <div key={item.id_post || item.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Header info / Breadcrumb block */}
                    <div className={styles.postHeader}>
                        <Link to={`/author/${item.id_user}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={styles.authorBox}>
                                {item.avatar && (
                                    <img
                                        className={styles.avatar}
                                        src={item.avatar}
                                        alt={item.name_user}
                                    />
                                )}
                                <div className={styles.authorDetails}>
                                    <h4 className={styles.authorName}>{item.name_user}</h4>
                                    <p className={styles.postDate}>Posted on {item.date}</p>
                                </div>
                            </div>
                        </Link>

                        <h1 className={styles.title}>{item.tittle}</h1>

                        <Link to={`/category/${item.id_catagory}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={styles.categoryTag}>
                                {item.imgcat && (
                                    <img
                                        className={styles.categoryIcon}
                                        src={item.imgcat}
                                        alt={item.name_catagory}
                                    />
                                )}
                                <span>{item.name_catagory}</span>
                            </div>
                        </Link>
                    </div>

                    {/* Featured Hero Image */}
                    <div className={styles.heroImageContainer}>
                        <img
                            className={styles.heroImage}
                            src={item.img}
                            alt={item.tittle}
                        />
                    </div>

                    {/* Article Content */}
                    <article className={styles.contentBody}>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>{item.text}</p>

                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec scelerisque. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>

                        <ul className={styles.bulletList}>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Non blandit massa enim nec scelerisque</li>
                            <li>Neque egestas congue quisque egestas</li>
                        </ul>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec scelerisque. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>

                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec scelerisque. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                        </p>
                    </article>
                </div>
            ))}

            {/* "What to read next" Section */}
            {readNext.length > 0 && (
                <section className={styles.readNextSection}>
                    <h2 className={styles.sectionTitle}>What to read next</h2>
                    <div className={styles.readNextGrid}>
                        {readNext.map((item) => (
                            <Link
                                to={`/post/${item.id_post}`}
                                key={item.id_post}
                                className={styles.cardLink}
                            >
                                <div className={styles.card}>
                                    <img
                                        className={styles.cardImage}
                                        src={item.img}
                                        alt={item.tittle}
                                    />
                                    <p className={styles.cardMeta}>
                                        By <span className={styles.authorHighlight}>{item.name_user}</span> | {item.date}
                                    </p>
                                    <h3>{item.tittle}</h3>
                                    <p className={styles.cardText}>{item.text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* "Join our team" CTA Section */}
            <section className={styles.joinSection}>
                <div className={styles.joinContent}>
                    <h3>Join our team to be a part <br />of our story</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt.</p>
                    <button>Join Now</button>
                </div>
            </section>
        </div>
    );
};

export default Post;
