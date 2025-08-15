import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <section className="Lbg1">
        <div className="row">
          <div className="col-lg-7"></div>
          <div className="col-lg-5 p-5">
            <h3 className="Lname text-light">Flavorsome</h3>
            <p className="Lsname text-light ms-4">Flavour, Perfected</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center LbgBtn">
          <a href="#Ldishes" className="btn btn-outline-light btn-lg mt-3 me-3">Top Dishes</a>
          <Link to="/menu" className="btn btn-outline-light btn-lg mt-3">Today's Menu
          </Link>
        </div>

      </section>

      {/* top dishes */}
      <section id="Ldishes">
        <h2 className="text-center pt-3 pb-5 fw-bold" style={{fontFamily: "Baumans, system-ui"}}>Our Top Dishes</h2>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <img
              src="https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg"
              alt="no img"
              className="Ldish1"
              style={{ borderRadius: "10px" }}
            />
            <p className="position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white" style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}}>SPAGHETTI</p>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/007/593/small_2x/pizza-veggie-italian-pizza-with-mozzarella-olives-sausage-and-vegetables-on-black-background-ai-generated-photo.jpg"
              alt="no img"
              className="Ldish1"
              style={{ borderRadius: "10px" }}
            />
            <p className="position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white" style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}}>PIZZA</p>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <img
              src="https://img.freepik.com/premium-photo/fresh-tasty-burger-french-fries-ketchup-dark-background_113876-3418.jpg"
              alt="no img"
              className="Ldish1"
              style={{ borderRadius: "10px" }}
            />
            <p className="position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white" style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}}>BURGER</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-evenly pb-5">
          <div className="position-relative" style={{cursor:'pointer'}}>
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20231106/pngtree-delectable-shawarma-kebab-infused-with-sausage-on-a-textured-black-stone-image_13812946.png"
              alt="no img"
              className="Ldish1"
              style={{ borderRadius: "10px" }}
            />
            <p className="position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white" style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}}>SHAWARMA</p>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <img
              src="https://img.freepik.com/premium-photo/asian-udon-noodles-with-chicken-vegetables-teriyaki-sauce-black-wooden-background_182920-966.jpg"
              alt="no img"
              className="Ldish1"
              style={{ borderRadius: "10px" }}
            />
            <p className="position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white" style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}}>CHOP SUEY</p>
          </div>
          <div className="position-relative" style={{cursor:'pointer'}}>
            <img
              src="https://png.pngtree.com/background/20230611/original/pngtree-steak-on-black-background-on-a-plate-picture-image_3161869.jpg"
              alt="no img"
              className="Ldish1"
              style={{ borderRadius: "10px" }}
            />
            <p className="position-absolute top-50 start-50 pt-5 mt-5 translate-middle text-white" style={{fontFamily: "Oswald, sans-serif", fontSize:"30px"}}>STEAK</p>
          </div>
        </div>
<div className="text-center ">
          <Link to="/menu" className="btn btn-outline-dark btn-lg mb-4">Order Now</Link>

</div>      </section>
    </div>
  );
};

export default Landing;
