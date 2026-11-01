import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './Category.module.scss';

const tagsList = ['Business', 'Startup', 'Economy', 'Technology'];

const Category = () => {
    const { id } = useParams();
    const [datacat, setDatacat] = useState([]);
    const [data, setData] = useState([]);
    const [selectedCatId, setSelectedCatId] = useState(id || null);
    const [activeTag, setActiveTag] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/getcat')
            .then((res) => res.json())
            .then((cats) => {
                setDatacat(cats);
                if (!selectedCatId && cats.length > 0) {
                    setSelectedCatId(cats[0].id_catagory);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/api/main')
            .then((res) => res.json())
            .then((posts) => setData(posts))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (id) {
            setSelectedCatId(id);
        }
    }, [id]);

    const activeCat =
        datacat.find((c) => String(c.id_catagory) === String(selectedCatId)) ||
        datacat[0];

    const handleTagClick = (tag) => {
        setActiveTag((prev) => (prev === tag ? null : tag));
    };

    // Фильтрация постов напрямую из БД
    const filteredPosts = data.filter((post) => {
        const matchesCategory = activeCat
            ? String(post.id_catagory) === String(activeCat.id_catagory)
            : true;

        if (!matchesCategory) return false;

        if (activeTag) {
            const lowerTag = activeTag.toLowerCase();
            const inTitle = post.tittle?.toLowerCase().includes(lowerTag);
            const inText = post.text?.toLowerCase().includes(lowerTag);
            const inCat = post.name_catagory?.toLowerCase().includes(lowerTag);
            return inTitle || inText || inCat;
        }

        return true;
    });

    return (
        <div className={styles.categoryPage}>
            {/* Header Banner */}
            {activeCat && (
                <div className={styles.headerBanner}>
                    <h1>{activeCat.name_catagory}</h1>
                    <p className={styles.description}>{activeCat.description}</p>
                    <div className={styles.breadcrumb}>
                        <Link to="/blog">Blog</Link>
                        <span>&gt;</span>
                        <span>{activeCat.name_catagory.toUpperCase()}</span>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <div className={styles.mainContainer}>
                {/* Левая колонка: посты из базы данных */}
                <div className={styles.postsColumn}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((item) => (
                            <Link
                                to={`/post/${item.id_post}`}
                                key={item.id_post}
                                className={styles.postRowLink}
                            >
                                <div className={styles.postRow}>
                                    <img
                                        className={styles.postImage}
                                        src={item.img}
                                        alt={item.tittle}
                                    />
                                    <div className={styles.postInfo}>
                                        <span className={styles.categoryBadge}>
                                            {item.name_catagory}
                                        </span>
                                        <h2 className={styles.postTitle}>{item.tittle}</h2>
                                        <p className={styles.postText}>{item.text}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Постов в этой категории пока нет</p>
                        </div>
                    )}
                </div>

                {/* Правая колонка: Сайдбар с категориями и тегами */}
                <aside className={styles.sidebarColumn}>
                    {/* Список категорий из БД */}
                    <div>
                        <h3 className={styles.sectionTitle}>Categories</h3>
                        <div className={styles.categoriesList}>
                            {datacat.map((item) => {
                                const isActive =
                                    activeCat && String(activeCat.id_catagory) === String(item.id_catagory);

                                return (
                                    <div
                                        key={item.id_catagory}
                                        className={`${styles.categoryCard} ${
                                            isActive ? styles.activeCategory : ''
                                        }`}
                                        onClick={() => {
                                            setSelectedCatId(item.id_catagory);
                                            setActiveTag(null);
                                        }}
                                    >
                                        <div className={styles.catIconWrapper}>
                                            <img src={item.imgcat} alt={item.name_catagory} />
                                        </div>
                                        <span className={styles.catName}>{item.name_catagory}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* All Tags */}
                    <div className={styles.tagsSection}>
                        <h3 className={styles.sectionTitle}>All Tags</h3>
                        <div className={styles.tagsList}>
                            {tagsList.map((tag) => (
                                <button
                                    key={tag}
                                    className={`${styles.tagPill} ${
                                        activeTag === tag ? styles.activeTag : ''
                                    }`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Category;
