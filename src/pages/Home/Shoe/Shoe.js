import React from "react";
import "./Shoe.css";
import { Card } from "react-bootstrap";

const Shoe = ({ item }) => {
  const {
    product_image,
  } = item;

  return (
    <Card className="item mx-2">
      <div className="image-box">
        <Card.Img
          variant="top"
          className="card-image hoverImage blogImage"
          src={product_image}
        />
      </div>
    </Card>
  );
};

export default Shoe;
