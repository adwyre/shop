import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import '../app/app.css';
import { useEffect, useState } from "react";
import { selectProducts, fetchProducts } from "../features/products/productsSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts)
  const [category, setCategory] = useState('');
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Set category to match pathname
    if (pathname === '/women') {
      setCategory("women's clothing");
    } else if (pathname === '/men') {
      setCategory("men's clothing");
    } else {
      setCategory(pathname.slice(1))
    }
  }, [pathname, search]);
  
  useEffect(() => {
    dispatch(fetchProducts(category));
  });

  return (
    <div className="container browse-page">
      <div className="row">
        {/* Sidebar */}
        <nav className="sidebar col-3">
          <ul className="navbar-nav mt-4 ms-2">
          <li><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
  <path d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
</svg> Filters</li>
          </ul>
        </nav>
        {/* Main section */}
        <div className="col-9 d-flex flex-wrap">
          {/* <p>{products[0].title}</p> */}
        </div>
      </div>
    </div>
  )
}
export default Browse