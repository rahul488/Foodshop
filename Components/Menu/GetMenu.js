import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import "../Service/Services.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/CartAction";
import axios from "axios";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import baseUrl from "../../__Url__/baseUrl";

function GetMenu() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  const isLogin = useSelector((state) => state.isLogin.isLoggedin);

  useEffect(() => {
    axios.get(`${baseUrl}/getProducts`).then(
      (response) => {
        setproducts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const addTocart = (item) => {
    if (!isLogin) {
      history.push("/login");
    } else {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };
      axios
        .post(`${baseUrl}/user/addTocart`, item, {
          headers: headers,
        })
        .then(
          (response) => {
            dispatch(addToCart(item));
          },
          (error) => {
            toast.error("Item already in your cart", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        );
    }
  };
  return (
    <div className="row service-content" style={{ marginLeft: "3px" }}>
    {products.map((item, index) => {
      return (
        <div className="col-md-4 col-xl-3 col-sm-4 col-lg-3 service_item" key={index}>
          <Card className="box" body>
            <CardImg
              className="image"
              top
              src={item.src}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5"> {item.name}</CardTitle>
              <CardSubtitle tag="h6" className="mt-3">
                <i className="fas fa-rupee-sign"></i>
                {item.price}
              </CardSubtitle>
              <Button
                color="primary"
                onClick={() => {
                  addTocart(item);
                }}
                className="mt-2 cart-btn"
                size="md"
              >
                Add To Cart
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    })}
    <ToastContainer />
  </div>
  )

}

export default GetMenu;
