import { useEffect, useState } from 'react';
import StatusBlock from './StatusBlock';

const Dashboard = () => {
  const [articles, setArticles] = useState([]);
  const [likes, setLikes] = useState(0); 
  const [comments, setComments] = useState(0); 
  const [publishedArticles, setPublishedArticles] = useState(0); 

  useEffect(() => {
    // Fetching the articles from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        calculateStats(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to calculate likes, comments, and published status from the fetched articles
  const calculateStats = (data) => {
    let likesCount = 0;
    let commentsCount = 0;
    let publishedCount = 0;

    data.forEach((article) => {
      likesCount += article.id;  
      commentsCount += 3;        
      if (article.userId % 2 === 0) {
        publishedCount++;
      }
    });

    setLikes(likesCount);
    setComments(commentsCount);
    setPublishedArticles(publishedCount);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="row">
        <StatusBlock title="Total Articles" value={articles.length} />
        <StatusBlock title="Total Likes" value={likes} />
        <StatusBlock title="Total Comments" value={comments} />
        <StatusBlock title="Published Articles" value={publishedArticles} />
      </div>

      <div className="articles">
        <h3>Articles</h3>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <strong>{article.title}</strong>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
