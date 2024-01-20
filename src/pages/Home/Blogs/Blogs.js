import React from "react";
import Blog from "./Blog";
import blog_1 from "./../../../asset/image/blog_1.jpeg";
import blog_2 from "./../../../asset/image/blog_2.png";
import blog_3 from "./../../../asset/image/blog_3.jpeg";
import blog_4 from "./../../../asset/image/blog_4.jpeg";

const items = [blog_1, blog_2, blog_3, blog_4]

const Blogs = () => {
  return (
    <div className="container my-5">
      <div className="BlogBox">
        {items?.map((item, i) => (
          <Blog key={i} item={item} />
        ))}
      </div>
  </div>
  );
};

export default Blogs;
