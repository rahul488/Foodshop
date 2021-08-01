import React from "react";
import { Col, Row, Button, FormGroup, Label } from "reactstrap";
import "./Login.css";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import baseUrl from "../../__Url__/baseUrl";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { afterLogin, isLoggedIn } from "../../actions/LoginAction";
import { userName } from "../../actions/NameAction";

function Login() {
  //const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const getName = () => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    axios
      .get(`${baseUrl}/user/getName`, {
        headers: headers,
      })
      .then(
        (response) => {
          if (response.data.length < 1) dispatch(userName("ADMIN"));
          else dispatch(userName(response.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const getcartDetails = () => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    axios
      .get(`${baseUrl}/user/getCart`, {
        headers: headers,
      })
      .then(
        (response) => {
          if (response.data && Array.isArray(response.data))
            dispatch(afterLogin(response.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const onSubmit = (values) => {
    axios.post(`${baseUrl}/user/signin`, values).then(
      (response) => {
        dispatch(isLoggedIn());
        localStorage.setItem("token", response.data);
        getName();
        getcartDetails();
        setTimeout(() => {
          history.push("/service");
        }, 1000);
      },
      (error) => {
        toast.error("Login Failed", { position: toast.POSITION.TOP_CENTER });
      }
    );
  };
  const validate = (values) => {
    let errors = {};

    if (!values.email) errors.email = "Required !";
    else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        values.email
      )
    ) {
      errors.email = "Enter a valid email";
    }
    if (!values.password) errors.password = "Required !";
    else if (values.password.length < 5) {
      errors.password = "Password at least 5 characters long";
    }

    return errors;
  };

  const history = useHistory();
  const register = () => {
    history.push("/register");
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <div className="login-container">
          <Form className="login-form">
            <Row form>
              <Col md={5}>
                <h1 className="text-center mb-4">Login here</h1>
              </Col>
            </Row>
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="input-box"
                    placeholder="Enter Your Email"
                  />
                </FormGroup>
                <p style={{ color: "yellow", marginTop: "-20px" }}>
                  <ErrorMessage name="email" />
                </p>
              </Col>
            </Row>
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="input-box"
                    placeholder="Enter Your Password"
                  />
                </FormGroup>
                <p style={{ color: "yellow", marginTop: "-20px" }}>
                  <ErrorMessage name="password" />
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  color="primary"
                  style={{ width: "120px" }}
                  className="login-btn"
                  type="submit"
                >
                  Login
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  color="danger"
                  style={{ width: "120px" }}
                  className="login-btn"
                  onClick={register}
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Formik>
      <ToastContainer />
    </>
  );
}

export default Login;
