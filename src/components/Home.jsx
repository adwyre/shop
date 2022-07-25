import React from "react";
import '../app/app.css';

const Home = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item image-1 active">
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>20% off outerwear</h1>
                <p>With fall around the corner stay cozy with our lightweight jackets and sweaters.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Shop now</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item image-2">
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Women's Tops</h1>
                <p>New collection of women's tops now available.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Shop now</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item image-3">
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Men's Clothing</h1>
                <p>Browse our large selection of men's apparel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Shop now</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="mission-container">
        <div className="row justify-content-evenly">
          <div className="col-lg-3">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#1395BD"/><text x="50%" y="50%" fill="#1395BD" dy=".3em">140x140</text></svg>

            <h2 className="fw-normal">Affordable</h2>
            <p>We always strive to provide affordable merchandise while still upholding our sustainability efforts.</p>
          </div>
          <div className="col-lg-3">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#1395BD"/><text x="50%" y="50%" fill="#1395BD" dy=".3em">140x140</text></svg>

            <h2 className="fw-normal">Sustainable</h2>
            <p>It is our duty as a company to constantly develop new methods of sustainability.</p>
          </div>
          <div className="col-lg-3">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#1395BD"/><text x="50%" y="50%" fill="#1395BD" dy=".3em">140x140</text></svg>

            <h2 className="fw-normal">Fashionable</h2>
            <p>As a fashion company our goal first and foremost is to give customers the best of today's styles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;