import React, { useEffect, useState } from "react";
import Footer from "../../../components/Shared/Footer/Footer";
import Header from "../../Header/Header/Header";
import "./SingleProduct.css";
import * as GoIcons from "react-icons/go";
import { Col, Form, Row } from "react-bootstrap";
import * as MdIconName from "react-icons/md";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const SingleProduct = () => {
  const { productID } = useParams();
  const [singleItem, setSingleItem] = useState({});
  const { user } = useAuth();

  const {
    _id,
    product_discount,
    product_code,
    product_image,
    product_name,
    product_price,
    product_ratings,
    product_title,
    product_type,
    product_details,
  } = singleItem;

  let price = product_price;
  let amount = product_price;
  let discount = product_discount;
  let discount_amount = product_discount;
  let product_id = productID;
  const status = "Pending";

  let quantity = 1;
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState({
    product_id,
    size: "sm",
    price,
    discount,
    discount_amount,
    amount,
    quantity,
    status,
    product_code,
  });

  useEffect(() => {
    const url = `http://103.4.146.166:5000/products/${productID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, [productID]);

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newValue = { ...cart };
    newValue[field] = value;
    setCart(newValue);
    setCount(count + 1);
  };

  const handleQuantity = (e) => {
    const field = e.target.name;
    const newQuantity = { ...cart };

    if (cart.quantity > 0) {
      if (field === "minus" && cart.quantity > 1) {
        newQuantity.quantity -= 1;
      }
      if (field === "plus") {
        newQuantity.quantity += 1;
      }

      setCart(newQuantity);
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const newCart = { ...cart };
    if (newCart.size === "sm") {
      newCart.price = price?.sm;
    } else if (newCart.size === "lg") {
      newCart.price = price?.lg;
    } else if (newCart.size === "xl") {
      newCart.price = price?.xl;
    }

    newCart.discount = product_discount;

    const totalPrice = newCart.price * newCart.quantity;
    newCart.amount = totalPrice;

    const totalDiscount = newCart.discount * 0.01 * newCart.amount;
    newCart.discount_amount = newCart.amount - totalDiscount;

    newCart.product_code = product_code;
    newCart.product_id = _id;

    setCart(newCart);
  }, [
    price?.sm,
    price?.lg,
    price?.xl,
    discount,
    discount_amount,
    amount,
    count,
    product_code,
    product_discount,
    cart,
    _id,
  ]);

  // localStorage function
  const addItem = (name, data) => {
    let getCart = localStorage.getItem(name);
    if (getCart === null) {
      const cart = JSON.stringify([data]);
      localStorage.setItem(name, cart);
    } else {
      getCart = JSON.parse(getCart);
      for (const item of getCart) {
        if (data.product_id === item.product_id && data.size === item.size) {
          item.quantity = item.quantity + data.quantity;
          const cart = JSON.stringify(getCart);
          localStorage.setItem(name, cart);
          return;
        }
      }
      getCart.push(data);
      const cart = JSON.stringify(getCart);
      localStorage.setItem(name, cart);
    }
  };

  const handlePlaceOrder = () => {
    setCount(count + 1);

    // what we store in localstorage
    const localCart = {
      product_id: cart.product_id,
      size: cart.size,
      quantity: cart.quantity,
    };
    // sent value and key to the function that will add it to local storage
    addItem(`${user.email}_cart`, localCart);
    // history.push('/placeorder');
  };

  const haneldeSizeSelection = (e) => {
    e.preventDefault();
  };

  const options = [40, 41, 42];

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleValueClick = (value) => {
    setSelectedValue(value);
  };

  const colorOptions = ["#fff", "#000", "#FF0000"];

  const [selectedColor, setSelectedColor] = useState(options[0]);

  const handleColorClick = (value) => {
    setSelectedColor(value);
  };

  return (
    <>
      <Header />
      <div className="">
        <div className="container topMargin pb-5 mb-5">
          <div className="row g-4">
            <div className="col-md-6 text-center imgContainer">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={product_image}
                  className="w-50 pb-2 cursor-pointer"
                  alt=""
                />

                <img
                  src={product_image}
                  className="w-50 pb-2 cursor-pointer"
                  alt=""
                />

                <img
                  src={product_image}
                  className="w-50 cursor-pointer"
                  alt=""
                />
              </div>

              <img
                src={product_image}
                className="singleImage pe-3 pe-md-2"
                alt=""
              />
            </div>

            <div className="col-md-6">
              <h2 className="robotoFont">
                Customize your {product_name} -{" "}
                <span className="text-danger ms-0">{product_type}</span>
              </h2>
              <p className="robotoFont text-warning mb-0">{product_title}</p>
              <small className="shadowsFont fw-light">
                {product_details}
                {cart.discount && (
                  <span className="shadowsFont px-2 rounded bg-danger text-white">
                    {cart.discount}% off
                  </span>
                )}
              </small>

              <div className="rating-star mt-2">
                <div className="">
                  <GoIcons.GoStar
                    className={
                      product_ratings > 0 ? "text-warning" : "text-muted"
                    }
                  />
                  <GoIcons.GoStar
                    className={
                      product_ratings > 1 ? "text-warning" : "text-muted"
                    }
                  />
                  <GoIcons.GoStar
                    className={
                      product_ratings > 2 ? "text-warning" : "text-muted"
                    }
                  />
                  <GoIcons.GoStar
                    className={
                      product_ratings > 3 ? "text-warning" : "text-muted"
                    }
                  />
                  <GoIcons.GoStar
                    className={
                      product_ratings > 4 ? "text-warning" : "text-muted"
                    }
                  />
                </div>
                <small className="text-muted shadowsFont">2,345 reviews</small>
              </div>
              <div className="mt-1">
                <small className="shadowsFont fw-bold">
                  {singleItem.availability === "In Stock" && (
                    <span className="shadowsFont rounded bg-white text-success">
                      In Stock
                    </span>
                  )}

                  {singleItem.availability === "Sold Out" && (
                    <span className="shadowsFont rounded bg-secondary text-white">
                      Sold Out
                    </span>
                  )}
                </small>
              </div>

              <div className="mt-3">
                <h5 className="shadowsFont text-muted">Color</h5>
                <div className="d-flex color-box rounded">
                  {colorOptions.map((option) => (
                    <div
                      key={option}
                      className={`size-selector color-selector rounded ${
                        selectedColor === option ? "selected" : ""
                      }`}
                      onClick={() => handleColorClick(option)}
                      style={{ backgroundColor: `${option}` }}
                    ></div>
                  ))}
                </div>
              </div>

              <fieldset className="mt-3">
                <h5 className="shadowsFont text-muted">Size Selector</h5>
                <div className="d-flex">
                  {options.map((option) => (
                    <div
                      key={option}
                      className={`size-selector rounded-circle me-3 ${
                        selectedValue === option ? "selected" : ""
                      }`}
                      onClick={() => handleValueClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </fieldset>

              <div className="mt-2">
                <h5 className="shadowsFont text-muted">Quantity</h5>
                <div className="d-flex">
                  <button
                    className="btn btnContainer px-3"
                    name="minus"
                    onClick={handleQuantity}
                  >
                    -
                  </button>
                  <div className="my-auto mx-3">{cart.quantity}</div>
                  <button
                    className="btn btnContainer px-3"
                    name="plus"
                    onClick={handleQuantity}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="my-3">
                <h5 className="shadowsFont fw-normal text-muted">
                  Price:{" "}
                  <span className="robotoFont fs-6 text-info fw-bold ms-0">
                    ${cart.amount}
                  </span>
                </h5>

                <h5 className="shadowsFont fw-bold text-warning">
                  Discount Price:{" "}
                  <span className="robotoFont fs-6 text-info fw-bold ms-0">
                    ${cart.discount_amount}
                  </span>
                </h5>
              </div>

              <button
                className="text-decoration-none login-cursor bg-dark px-2 text-white rounded fs-6 read-more"
                onClick={handlePlaceOrder}
              >
                Add to Cart
                <MdIconName.MdDoubleArrow className="fs-5 icon-background ms-2" />{" "}
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SingleProduct;
