import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LikedArticles = ({ likedArticles }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Liked Articles</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      <div className="nav-buttons">
        <button className="active">Liked</button>
        <Link to="/articles/commented">
          <button>Commented</button>
        </Link>
        <Link to="/articles/published">
          <button>Published</button>
        </Link>
      </div>

      <ul className="articles-list">
        {likedArticles.length > 0 ? (
          likedArticles.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </li>
          ))
        ) : (
          <p>No liked articles found.</p>
        )}
      </ul>
    </div>
  );
};

LikedArticles.propTypes = {
  likedArticles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LikedArticles;
