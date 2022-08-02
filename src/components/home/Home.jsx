import React from "react";
import './home.css';
import { useEffect, useState } from "react";
import Modal from '../modal/Modal'

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide < 2) {
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(0)
    }
  }

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    } else {
      setActiveSlide(2)
    }
  }

  const selectSlide = (e) => {
    setActiveSlide(parseInt(e.target.dataset.bsSlideTo))
  }

  useEffect(() => {
    const newInterval = setInterval(nextSlide, 7000);
    return () => {
      clearInterval(newInterval);
    };
  }, [activeSlide]
  )

  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className={activeSlide === 0 ? "active" : ""} onClick={selectSlide}></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" className={activeSlide === 1 ? "active" : ""} onClick={selectSlide}></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" className={activeSlide === 2 ? "active" : ""} onClick={selectSlide}></button>
        </div>
        <div className="carousel-inner">
          <div className={activeSlide === 0 ? "carousel-item active" : "carousel-item"} data-bs-slide="0">
            <div className="image-0"></div>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>20% off outerwear</h1>
                <p>With fall around the corner stay cozy with our lightweight jackets and sweaters.</p>
                <p><a className="btn btn-lg btn-cta" href="#">Shop now</a></p>
              </div>
            </div>
          </div>
          <div className={activeSlide === 1 ? "carousel-item active" : "carousel-item"} data-bs-slide="1">
            <div className="image-1"></div>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Women's Tops</h1>
                <p>New collection of women's tops now available.</p>
                <p><a className="btn btn-lg btn-cta" href="#">Shop now</a></p>
              </div>
            </div>
          </div>
          <div className={activeSlide === 2 ? "carousel-item active" : "carousel-item"} data-bs-slide="2">
            <div className="image-2"></div>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Men's Clothing</h1>
                <p>Browse our large selection of men's apparel.</p>
                <p><a className="btn btn-lg btn-cta" href="#">Shop now</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" onClick={prevSlide}>
          <span className="carousel-control-prev-icon" ></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" ></span>
        </button>
      </div>
      <div className="mission-container">
        <div className="row justify-content-evenly">
          <div className="col-lg-3">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#00a2d3"/></svg>

            <h2 className="fw-normal">Affordable</h2>
            <p>We always strive to provide affordable merchandise while still upholding our sustainability efforts.</p>
          </div>
          <div className="col-lg-3">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#00a2d3"/></svg>

            <h2 className="fw-normal">Sustainable</h2>
            <p>It is our duty as a company to constantly develop new methods of sustainability.</p>
          </div>
          <div className="col-lg-3">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#00a2d3"/></svg>

            <h2 className="fw-normal">Fashionable</h2>
            <p>As a fashion company our goal first and foremost is to give customers the best of today's styles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;