import PropTypes from "prop-types"; 

const ArticleItem = ({ article }) => {
  return (
    <li>
      <h5>{article.title}</h5>
      <p>{article.body}</p>
    </li>
  );
};

ArticleItem.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleItem;
