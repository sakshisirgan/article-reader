import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PublishedArticles = ({ publishedArticles }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Published Articles</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/articles/liked">
          <button>Liked</button>
        </Link>
        <Link to="/articles/commented">
          <button>Commented</button>
        </Link>
        <button className="active">Published</button>
      </div>

      <ul className="articles-list">
        {publishedArticles.length > 0 ? (
          publishedArticles.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </li>
          ))
        ) : (
          <p>No published articles found.</p>
        )}
      </ul>
    </div>
  );
};

PublishedArticles.propTypes = {
  publishedArticles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PublishedArticles;
