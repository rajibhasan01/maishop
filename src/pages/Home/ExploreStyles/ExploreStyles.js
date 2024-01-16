import "./ExploreStyles.css";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import ExploreStyle from "../ExploreStyle/ExploreStyle";

const ExploreStyles = () => {
  let [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const value = true;

  useEffect(() => {
    fetch("http://103.4.146.166:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [count]);

  return (
    <div className="container my-5">
      <section className="d-flex gap-3 align-items-center">
        <div className="vertical_text_layout">
          <p className="typograph m-0"> EXPLORE NEW AND POPULAR STYLES </p>
        </div>
        <div className="stylebox">
          {items?.map((item) => (
            <ExploreStyle value={value} key={item.product_code} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExploreStyles;
