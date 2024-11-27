import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const ArticleDetail = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        
        if (response.ok) {
          setArticle(data); 
        } else {
          throw new Error('Article not found');
        }
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);  
      }
    };

    fetchArticle();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className="article-detail">
      {article ? (
        <>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </>
      ) : (
        <p>No article found.</p>
      )}
    </div>
  );
};

export default ArticleDetail;
