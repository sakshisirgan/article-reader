import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="form-control"
      />
      <button onClick={handleSearch} className="btn btn-primary mt-2">
        Search
      </button>
    </div>
  );
};


SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, 
};

export default SearchBar;
