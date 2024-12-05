import './Searchbar.css';

const Searchbar = () => {
  return(
    <div className="searchbar-container">
      <input 
        type="searchbar"
        className="searchbar" 
        placeholder="Search for Courses" />
    </div>
  );
}

export default Searchbar;