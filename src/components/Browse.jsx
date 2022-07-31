import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import '../app/app.css';
import { useEffect, useState } from "react";
import { selectCategory, selectSubcategory, selectProducts, fetchProducts, fetchSubcategory, setCategory, setSubcategory } from "../features/products/productsSlice";
import Products from "../features/products/Products";
import SortBar from "./SortBar";

const Browse = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const category = useSelector(selectCategory);
  const subcategory = useSelector(selectSubcategory);
  const { pathname, search } = useLocation();
  const { isLoading, error } = products;

  // If category empty after render set to default
  useEffect(() => {
    if (!category) {
      if (pathname === '/women') {
        dispatch(setCategory("women's clothing"));
      } else if (pathname=== '/men') {
        dispatch(setCategory("men's clothing"));
      } else {
        dispatch(setCategory("jewelery"));
      }
    } else {
      return
    }
  }, [pathname])

  // Fetch product data
  useEffect(() => {
    console.log(subcategory)
    if (subcategory) {
      dispatch(fetchSubcategory(category, subcategory));
    } else {
      dispatch(fetchProducts(category));
    }
  }, [category, search]);

  return (
    <div className="browse-page">
      <div className="row">
        {/* sort-bar */}
        <SortBar />
        {/* Products */}
        <div className="bowse-items d-flex flex-wrap">
          { !isLoading || products.length > 0 ? products.map(product => <Products product={product}/>) : <p>Loading</p>}
        </div>
      </div>
    </div>
  )
}
export default Browse