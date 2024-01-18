import React from "react";
import "./Product.css";
import { Card, Col } from "react-bootstrap";
import * as MdIconName from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ value, spd, item }) => {
  const {
    product_discount,
    product_arrival,
    product_image,
    product_name,
    product_price,
    product_ratings,
    product_title,
    product_type,
  } = item;

  return (
    <Col>
      <Card
        className={
          value
            ? "border-0 p-3 text-start card-container HomeBackground mb-4"
            : "border-0 p-0 text-start card-container HomeBackground mb-4"
        }
      >
        <div className="image-box imgContainer">
          <Card.Img
            variant="top"
            className="card-image hoverImage blogImage"
            src={product_image}
          />
        </div>

        {product_discount !== 0 && (
          <Card.Text className="discountProduct">-{product_discount}</Card.Text>
        )}

        {product_arrival === "New" && (
          <Card.Text className="productArrival">{product_arrival}</Card.Text>
        )}

        <Card.Body className="px-0 py-2">
          <Card.Title className="text-title">
            <span>{product_name}</span>
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <span>Nike Original</span>
            <span className="text-danger">${product_price.sm}</span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
