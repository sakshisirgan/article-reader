import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; 
import ArticleItem from "./ArticleItem"; 

const ArticlesList = () => {
  const [filteredArticles, setFilteredArticles] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(""); 

  // Fetch articles from API and filter only published articles
  useEffect(() => {
    setLoading(true);

    // Perform a GET request using axios to fetch articles
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const publishedArticles = response.data.filter(
          (article) => article.userId > 1
        );
        setFilteredArticles(publishedArticles); 
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles"); 
        setLoading(false); 
      });
  }, []); 


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchedArticles = filteredArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading published articles...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Published Articles</h2>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
      <ul>
        {searchedArticles.length > 0 ? (
          searchedArticles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))
        ) : (
          <li>No articles found.</li> 
        )}
      </ul>
    </div>
  );
};

ArticlesList.propTypes = {
  filteredArticles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ArticlesList;
