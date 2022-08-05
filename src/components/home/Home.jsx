import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import './home.css';
// Store
import { setCategory, setSubcategory } from "../../store/productsSlice";


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const dispatch = useDispatch();

  // Go to next slide in carousel
  const nextSlide = () => {
    if (activeSlide < 2) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  }

  // Go to previous slide in carousel
  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(2);
    }
  }

  // Go to selected slide in carousel
  const selectSlide = (e) => {
    setActiveSlide(parseInt(e.target.dataset.bsSlideTo));
  }

  // Navigate to browse page on cta button click
  const handleNavClick = (e) => {
    dispatch(setCategory(e.target.dataset.toCategory));
    if (e.target.dataset.toSubcategory) {
      dispatch(setSubcategory(e.target.dataset.toSubcategory));
    } else {
      dispatch(setSubcategory(''));
    }
  }

  // Start auto slide change
  useEffect(() => {
    const newInterval = setInterval(nextSlide, 7000);
    return () => {
      clearInterval(newInterval);
    };
  }, [activeSlide]
  )

  return (
    <div>
      {/* Image Carousel */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className={activeSlide === 0 ? "active" : ""} onClick={selectSlide}></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className={activeSlide === 1 ? "active" : ""} onClick={selectSlide}></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className={activeSlide === 2 ? "active" : ""} onClick={selectSlide}></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className={activeSlide === 0 ? "carousel-item active" : "carousel-item"} data-bs-slide="0">
            <div className="image-0"></div>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>20% off Women's Outerwear</h1>
                <p>With fall around the corner stay cozy with our lightweight jackets and sweaters.</p>
                <p><NavLink className="btn btn-lg btn-cta" data-to-category="women's clothing" data-to-subcategory="outerwear" to={{pathname: '/women', search: '?category=outerwear'}} onClick={handleNavClick}>Shop now</NavLink></p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className={activeSlide === 1 ? "carousel-item active" : "carousel-item"} data-bs-slide="1">
            <div className="image-1"></div>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Women's Tops</h1>
                <p>New collection of women's tops now available.</p>
                <p><NavLink className="btn btn-lg btn-cta" data-to-category="women's clothing" data-to-subcategory="tops" to={{pathname: '/women', search: '?category=tops'}} onClick={handleNavClick}>Shop now</NavLink></p>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className={activeSlide === 2 ? "carousel-item active" : "carousel-item"} data-bs-slide="2">
            <div className="image-2"></div>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Men's Clothing</h1>
                <p>Browse our large selection of men's apparel.</p>
                <p><NavLink className="btn btn-lg btn-cta" data-to-category="men's clothing" to='/men' onClick={handleNavClick}>Shop now</NavLink></p>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Nav */}
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" ></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" ></span>
        </button>
      </div>
      <div className="mission-container">
        <div className="row justify-content-evenly">
          {/* Affordable Mission */}
          <div className="col-lg-3 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="#00a2d3" className="bi-coin" viewBox="0 0 16 16"><path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
            <h2 className="fw-normal">Affordable</h2>
            <p>We promise to provide affordable merchandise while maintaining our sustainability efforts.</p>
          </div>
          {/* Sustainable Mission */}
          <div className="col-lg-3 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="#00a2d3" className="bi-recycle" viewBox="0 0 16 16"><path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/></svg>
            <h2 className="fw-normal">Sustainable</h2>
            <p>It is our duty as a company to constantly develop new methods of sustainability.</p>
          </div>
          {/* Fashionable Mission */}
          <div className="col-lg-3 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="#00a2d3" className="bi-stars" viewBox="0 0 16 16"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/></svg>
            <h2 className="fw-normal">Fashionable</h2>
            <p>As a fashion company our main goal is to give customers the best of today's styles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;