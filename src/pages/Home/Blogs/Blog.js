import React from "react";
import { Card } from "react-bootstrap";
import "./Blog.css";

const Blog = ({ item }) => {

  return (
    <Card className="item bg-primary">
      <div className="image-box ">
        <Card.Img
          variant="top"
          className="card-image hoverImage blogImage"
          src={item}
        />
      </div>
    </Card>
  );
};

export default Blog;
