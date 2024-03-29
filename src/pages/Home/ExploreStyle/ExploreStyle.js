import React from "react";
import "./ExploreStyle.css";
import { Card } from "react-bootstrap";

const ExploreStyle = ({  item }) => {
  const {
    product_image,
  } = item;

  return (
    <Card className="item">
      <div className="image-box ">
        <Card.Img
          variant="top"
          className="card-image hoverImage blogImage"
          src={product_image}
        />
      </div>
    </Card>
  );
};

export default ExploreStyle;
