import { React, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './search.css';
// Components
import Products from "../products/Products";
import SortBar from "../sortBar/SortBar";
// Store
import { selectSorted, fetchSearchResults, selectSearchResults, selectSearchTerm} from "../../store/productsSlice";


const Search = () => {
  const dispatch = useDispatch();
  const sorted = useSelector(selectSorted);
  const searchResults = useSelector(selectSearchResults);
  const searchTerm = useSelector(selectSearchTerm);

  // Fetch product data
  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchSearchResults(searchTerm));
    } else {
      console.log('none')
    }
    }, [searchTerm]);

  return (
    <div className="search-page">
      <div className="row">
        {/* sort-bar */}
        <SortBar />
        {/* Products */}
        <div className="bowse-items d-flex flex-wrap">
          { searchResults.length > 0 ?
            <>
            { sorted.length > 0 ? sorted.map((product, i) => <Products key={i} product={product}/>) : searchResults.map((product, i) => <Products key={i} product={product}/>)}
            </>
            :
            <h4>no results found</h4>
          }
        </div>
      </div>
    </div>
  )
}

export default Search;