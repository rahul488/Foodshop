import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import { removeToCart } from "../../actions/CartAction";
import "./CartDetails.css";
import { useHistory } from "react-router";
import axios from "axios";
import baseUrl from "../../__Url__/baseUrl";
import { toast, ToastContainer } from "react-toastify";

function CartDatails() {
  const cart_item = useSelector((state) => state.addProduct.item);
  const dispatch = useDispatch();

  const history = useHistory();

  const shopNow = () => {
    history.push("/service");
  };
  const remove = (item, index) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    axios
      .post(`${baseUrl}/user/removeFromcart`, item, {
        headers: headers,
      })
      .then(
        (response) => {
          dispatch(removeToCart(index));
        },
        (error) => {
          toast.error("Server Down", { position: toast.POSITION.TOP_CENTER });
        }
      );
  };
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  /* 
  Payment integration
  */
  const buyNow = async (item, index) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast.error("Are you online", { position: toast.POSITION.TOP_CENTER });
      return;
    }
    const result = await axios.post(`${baseUrl}/user/buy-now`, item, {
      headers: headers,
    });

    if (!result) {
      toast.error("Are you online", { position: toast.POSITION.TOP_CENTER });
      return;
    }
    const { amount, id, currency } = result.data;

    const options = {
      key: "rzp_test_HN7Vmryxdgo3kI",
      amount: amount,
      name: "Food4You",
      currency: currency,
      order_id: id,

      handler: async function (response) {
        toast.success("Payment Successfull", {
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch(removeToCart(index));
        remove(item);
      },
      prefill: {
        name: "Rahul Kumar",
        email: "myself.rahul78@gmail.com",
        contact: "7894787693",
      },
      notes: {
        address: "Bhubaneswar,Odisha",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const payment = new window.Razorpay(options);
    payment.open();
  };

  return (
    <>
      {cart_item.length < 1 ? (
        <div className="empty-div">
          <Card className="empty-card" body>
            <CardTitle tag="h2">Your Cart is Empty !</CardTitle>
            <i className="fas fa-cart-arrow-down cart-icon mt-3"></i>
            <CardSubtitle tag="h6" className="mb-2 mt-3 text-muted">
              Add items to it now.
            </CardSubtitle>
            <Button color="primary" onClick={shopNow} className="mt-3">
              Shop Now
            </Button>
          </Card>
        </div>
      ) : (
        <Row>
          {cart_item.map((product, index) => {
            return (
              <>
                <Col sm="3">
                  <Card body className="cart-card" key={index}>
                    <CardImg
                      className="image"
                      top
                      src={product.src}
                      alt="Card image cap"
                    />
                    <CardTitle tag="h5" className="mt-3">
                      {" "}
                      {product.name}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mt-1">
                      <i className="fas fa-rupee-sign"></i>
                      {product.price}
                    </CardSubtitle>
                    <Button
                      color="primary"
                      className="mt-2"
                      style={{ width: "50%", textAlign: "center" }}
                      onClick={() => buyNow(product, index)}
                    >
                      Buy Now
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => remove(product, index)}
                      className="mt-1"
                      style={{ width: "50%", textAlign: "center" }}
                    >
                      Remove Item
                    </Button>
                  </Card>
                </Col>
              </>
            );
          })}
          <ToastContainer />
        </Row>
      )}
    </>
  );
}

export default CartDatails;
