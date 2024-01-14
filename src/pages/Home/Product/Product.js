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

        <Card.Body className="ps-0 pb-0">
          <Card.Title className="text-title">
            <span>{product_name}</span>
            <span className="text-danger">
              ${product_price.sm}
            </span>
          </Card.Title>
          <Card.Text className="text-muted text-justify">
            {product_title.slice(0, 45)} jhgjhlkjl kjhlhf mmffhjgkh hchnjgkjh.....
          </Card.Text>{" "}
          <Link
            className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more"
            to={`/products/${item._id}`}
          >
            Details
            <MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" />{" "}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
