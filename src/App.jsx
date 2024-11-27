import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ArticlesList from "./articles/ArticlesList";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./home/Home";
import ArticleDetail from "./articles/ArticleDetail"; 
import LikedArticles from "./articles/LikedArticles";
import CommentedArticles from "./articles/CommentedArticles";
import PublishedArticles from "./articles/PublishedArticles";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [user] = useState("John Doe");
  const [notifications] = useState();

  // Simulated article data
  const [articles] = useState([
    { id: 1, title: "Article 1", body: "This is the first article", liked: true, commented: false, published: true },
    { id: 2, title: "Article 2", body: "This is the second article", liked: false, commented: true, published: false },
    { id: 3, title: "Article 3", body: "This is the third article", liked: true, commented: true, published: true },
    { id: 37, title: "Article 37", body: "This is the thirty seven article", liked: true, commented: false, published: true },
    { id: 56, title: "Article 56", body: "This is the fifty six article", liked: false, commented: true, published: false },
    { id: 93, title: "Article 93", body: "This is the ninty three article", liked: true, commented: true, published: false },
  ]);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} notifications={notifications} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<ArticlesList articles={articles} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
          <Route path="/articles/liked" element={<LikedArticles />} />
          <Route path="/articles/commented" element={<CommentedArticles />} />
          <Route path="/articles/published" element={<PublishedArticles />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
