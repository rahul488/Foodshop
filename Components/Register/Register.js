import React from "react";
import { Col, Row, Button, FormGroup, Label } from "reactstrap";
import "./Register.css";
import { MailFormat } from "../../Constants/Constants";
import { Field, FieldArray, Formik, Form, ErrorMessage } from "formik";
import states from "./State";
import CustomSelect from "./CustomSelect";
import DistrictSelect from "./DistrictSelect";
import PincodeSelect from "./PincodeSelect";
import Error from "../Error/Error";
import { Link, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import baseUrl from "../../__Url__/baseUrl";

const Register = () => {
  const history = useHistory();

  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    address: [""],
    state: "",
    district: "",
    city: "",
    pincode: ""
  };
  const onSubmit = values => {
    initialValues.fName = values.fName;
    initialValues.lName = values.lName;
    initialValues.email = values.email;
    initialValues.password = values.password;
    initialValues.state = values.state.value;
    initialValues.district = values.district.value;
    initialValues.pincode = values.pincode;
    initialValues.address = values.address;

    axios.post(`${baseUrl}/user/register`, initialValues).then(
      response => {
        toast.success("Registered Successfully", {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          history.push("/login");
        }, 3000);
      },
      error => {
        toast.error("Server Down", { position: toast.POSITION.TOP_CENTER });
      }
    );
  };
  const validate = values => {
    let errors = {};

    //fname validation
    if (!values.fName) {
      errors.fName = "Required !";
    } else if (values.fName.length < 3) {
      errors.fName = "Firstname at least 3 characters long";
    }
    //lname validation
    if (!values.lName) {
      errors.lName = "Required !";
    } else if (values.lName.length < 3) {
      errors.lName = "Lastname at least 3 characters long";
    }
    //email validation
    if (!values.email) {
      errors.email = "Required !";
    } else if (!MailFormat.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    //password validation
    if (!values.password) {
      errors.password = "Required !";
    } else if (values.password.length < 5) {
      errors.password = "Password at least 6 characters long";
    }
    //addresss validation
    /* if(!values.address || !values.address.length){
      errors.address="Required !"
    }else {
      const addressError=[]
      values.address.forEach((addr,index)=>{
        const addrError={}
        if(!addr || addr.length < 5){
          addrError.addr="Required !"
          addressError[index]=addrError;
        }
      })
      if(addressError){
        errors.address=addressError
      }
    } */
    //state validation
    if (!values.state) {
      errors.state = "Required !";
    } else if (values.state.length < 2) {
      errors.state = "Please Enter a valid state";
    }
    //district validation
    if (!values.district) {
      errors.district = "Required !";
    } else if (values.district.length < 5) {
      errors.district = "Please Enter a valid District";
    }
    //pincode validation
    if (!values.pincode) {
      errors.pincode = "Required !";
    } else if (values.pincode.length < 6) {
      errors.pincode = "Please enter a valid pincode";
    }
    return errors;
  };
  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
      >
        {props => (
          <Form className="ml-5 register-form ">
            <div>
              <h2 className="register-text">Register Here</h2>
            </div>
            <div className="devider mb-2"></div>
            <Row form className="mt-5">
              <Col md={5}>
                <FormGroup>
                  <Label for="firstname">FirstName:</Label>
                  <Field
                    type="text"
                    name="fName"
                    id="fname"
                    className="input-register-box"
                  />
                  <ErrorMessage name="fName" component={Error} />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="lastName">LastName:</Label>
                  <Field
                    type="text"
                    name="lName"
                    id="lname"
                    className="input-register-box"
                  />
                  <ErrorMessage name="lName" component={Error} />
                </FormGroup>
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
                    className="input-register-box"
                  />
                  <ErrorMessage name="email" component={Error} />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="input-register-box"
                  />
                  <ErrorMessage name="password" component={Error} />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={10}>
                <FormGroup>
                  <Label for="address">Address:</Label>
                  <FieldArray name="address">
                    {helper => {
                      const { push, remove, form } = helper;
                      const { values } = form;
                      const { address } = values;
                      return (
                        <div>
                          {address.map((adrs, index) => (
                            <div key={index} className="multi-address">
                              <Field
                                name={`address[${index}]`}
                                type="text"
                                className="input-register-box mb-2"
                              />
                              <Button
                                type="button"
                                color="primary"
                                className="inc"
                                onClick={() => push("")}
                              >
                                +
                              </Button>
                              {index > 0 && (
                                <Button
                                  type="button"
                                  className="dec"
                                  color="danger"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </Button>
                              )}
                            </div>
                          ))}
                          {/*  <ErrorMessage name="password" component={Error} /> */}
                        </div>
                      );
                    }}
                  </FieldArray>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <CustomSelect
                    options={states}
                    className="input-register-box"
                    value={props.values.state.value}
                    onChange={value => props.setFieldValue("state", value)}
                  />
                  <ErrorMessage name="state" component={Error} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="district">District:</Label>
                  {states.map((state, index) => {
                    if (state.value === props.values.state.value) {
                      return (
                        <DistrictSelect
                          key={index}
                          options={state.district}
                          value={props.values.district.value}
                          onChange={value =>
                            props.setFieldValue("district", value)
                          }
                        />
                      );
                    }
                    return null;
                  })}
                  <ErrorMessage name="district" component={Error} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="pincode">Pincode:</Label>
                  {states.map((state, index) => {
                    if (state.value === props.values.state.value) {
                      return (
                        <PincodeSelect
                          key={index}
                          options={state.pincode}
                          value={props.values.pincode}
                          onChange={value =>
                            props.setFieldValue("pincode", value.label)
                          }
                        />
                      );
                    }
                    return null;
                  })}
                  <ErrorMessage name="pincode" component={Error} />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={3} className="offset-4">
                <Button
                  className="mt-1 register-btn"
                  type="submit"
                  color="primary"
                >
                  Submit
                </Button>
              </Col>
            </Row>
            <Row form>
              <Link to="/login" className="mt-2 mb-3" style={{ color: "red" }}>
                Already have an account
              </Link>
            </Row>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Register;
