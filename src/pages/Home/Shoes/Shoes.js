import "./Shoes.css";
import React, { useEffect, useState } from "react";
import Shoe from "../Shoe/Shoe";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

const Shoes = () => {
  let [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("http://103.4.146.166:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [count]);

  return (
    <Container className="text-center my-5 sliderContainer">
      <div class="text-start buttonBox">
        <button class="btn productsBoxBtn px-3 shoeBtn" name="btn1">
          SHOES
        </button>
      </div>
      <div className="border px-3 py-4">
      <Row  className="g-4">
        <Slider {...settings}>
          {items?.map((item) => (
            <Shoe key={item._id} item={item} />
          ))}
        </Slider>
      </Row>
      </div>
    </Container>
  );
};

export default Shoes;
