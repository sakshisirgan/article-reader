import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for routing
import axios from 'axios';
import './Home.css';

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [published, setPublished] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        // Simulate dynamic likes, comments, and status
        const generatedLikes = posts.length * 5;
        const generatedComments = posts.length * 3;
        const publishedArticles = Math.floor(posts.length / 2);

        setArticles(posts);
        setLikes(generatedLikes);
        setComments(generatedComments);
        setPublished(publishedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return { articles, likes, comments, published };
};

const Home = () => {
  const { articles, likes, comments, published } = useFetchArticles();
  const navigate = useNavigate(); // For programmatic navigation

  // Handlers for navigation
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <aside className="home-sidebar">
        <div className="stat" onClick={() => handleNavigate('/articles')}>
          <h3>Total Articles</h3>
          <p>{articles.length}</p>
        </div>
        <div className="stat" onClick={() => handleNavigate('/articles/liked')}>
          <h3>Total Likes</h3>
          <p>{likes}</p>
        </div>
        <div className="stat" onClick={() => handleNavigate('/articles/commented')}>
          <h3>Total Comments</h3>
          <p>{comments}</p>
        </div>
        <div className="stat" onClick={() => handleNavigate('/articles/published')}>
          <h3>Published Articles</h3>
          <p>{published}</p>
        </div>
      </aside>

      <main className="home-main">
        <h2>All Articles</h2>
        <ul className="article-list">
          {articles.map((article, index) => (
            <li key={article.id} className="article-item">
              <h3>
                {/* Wrap the article title with Link */}
                <Link to={`/articles/${article.id}`} className="article-link">
                  Article {index + 1}: {article.title}
                </Link>
              </h3>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
