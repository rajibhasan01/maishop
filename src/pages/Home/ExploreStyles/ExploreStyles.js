import "./ExploreStyles.css";
import React, { useEffect, useState } from "react";
import ExploreStyle from "../ExploreStyle/ExploreStyle";

const ExploreStyles = () => {
  let [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://103.4.146.166:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 9));
      });
  }, [count]);

  return (
    <div className="container my-5">
      <div className="header-mobile-text text-center">
        <p className="m-0"> EXPLORE NEW AND POPULAR STYLES </p>
      </div>
      <section className="d-flex gap-3 align-items-center">
        <div className="vertical_text_layout">
          <p className="m-0"> EXPLORE NEW AND POPULAR STYLES WITH OUR PRODUCTS </p>
        </div>
        <div className="stylebox">
          {items?.map((item) => (
            <ExploreStyle key={item.product_code} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreStyles;
