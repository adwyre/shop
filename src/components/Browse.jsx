import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import '../app/app.css';
import { useEffect, useState } from "react";
import { selectProducts, fetchProducts } from "../features/products/productsSlice";
import Products from "../features/products/Products";

const Browse = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts)
  const [category, setCategory] = useState('');
  const { pathname, search } = useLocation();
  const { isLoading, error } = products;

  useEffect(() => {
    // Set category to match pathname
    if (pathname === '/women') {
      setCategory("women's clothing");
    } else if (pathname === '/men') {
      setCategory("men's clothing");
    } else {
      setCategory("jewelery")
    }
  }, [pathname, search]);
  
  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [category]);

  return (
    <div className="browse-page">
      <div className="row">
        {/* filter-bar */}
        <nav className="filter-bar">
          <ul className="navbar-nav ms-2">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
  <path d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
</svg> Filters</li>
          </ul>
        </nav>
        {/* Main section */}
        <div className="bowse-items d-flex flex-wrap">
          { !isLoading || products.length > 0 ? products.map(product => <Products product={product}/>) : <p>Loading</p>}
        </div>
      </div>
    </div>
  )
}
export default Browse