import { sortBy } from "../../store/productsSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './sortBar.css';

const SortBar = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();

  const handleChange = (e) => {
    dispatch(sortBy(e.target.value))
  }

  useEffect(() => {
    document.getElementById("sort").value = "all"
  }, [pathname, search])

  return (
    <div className="sort-container">
      <div className="sort-bar">
        <label htmlFor="sort" className="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
  <path d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
  </svg> Sort by:</label>
        <select onChange={handleChange} id="sort" name="sort" className="form-select">
          <option value="all">-----</option>
          <option value="price-asc">Price: low-high</option>
          <option value="price-desc">Price: high-low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  )
}

export default SortBar