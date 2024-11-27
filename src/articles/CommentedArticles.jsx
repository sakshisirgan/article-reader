import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CommentedArticles = ({ commentedArticles }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Commented Articles</h1>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/articles/liked">
          <button>Liked</button>
        </Link>
        <button className="active">Commented</button>
        <Link to="/articles/published">
          <button>Published</button>
        </Link>
      </div>

      <ul className="articles-list">
        {commentedArticles.length > 0 ? (
          commentedArticles.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </li>
          ))
        ) : (
          <p>No commented articles found.</p>
        )}
      </ul>
    </div>
  );
};

CommentedArticles.propTypes = {
  commentedArticles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentedArticles;
