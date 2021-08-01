import React from "react";
import { Col, Row, Button, Label, Input } from "reactstrap";
import { Field, Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import baseUrl from "../../__Url__/baseUrl";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import Error from "../Error/Error";
import "../Register/Register";

function AddProduct() {
  const initialValues = {
    name: "",
    price: "",
    src: "",
  };
  const onSubmit = (values, { resetForm }) => {
    initialValues.src = values.src.name;
    initialValues.name = values.name;
    initialValues.price = values.price;
    axios.post(`${baseUrl}/admin/addProduct`, initialValues).then(
      (response) => {
        toast.success("Product Added Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      },
      (error) => {
        toast.error("You are not authorized", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    );
    resetForm({ values: "" });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name atleast 3 characters long !")
      .max(20, "Name too long")
      .required("Required"),
    price: Yup.number()
      .min(2, "Price must be at least 2 digit long")
      .required("Required !"),
  });

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(props) => (
          <div>
            <Form>
              <Row form>
                <h3 md={6} xl={8} sm={8} className="text-center offset-4 mt-2">
                  Add Product Here
                </h3>
                <Col md={10} xl={10} sm={8} className="offset-1">
                  <Label for="name" className="mt-2">
                    Product Name:
                  </Label>
                  <Field
                    type="text"
                    name="name"
                    className="input-register-box"
                    placeholder="Enter product name"
                  />
                  <ErrorMessage name="name" component={Error} />
                </Col>
              </Row>
              <Row form>
                <Col md={10} xl={10} sm={8} className="offset-1">
                  <Label for="name" className="mt-2">
                    Product Price:
                  </Label>
                  <Field
                    type="text"
                    name="price"
                    className="input-register-box"
                    placeholder="Enter product price"
                  />
                  <ErrorMessage name="price" component={Error} />
                </Col>
              </Row>
              <Row form className="mt-2">
                <Col md={10} xl={10} sm={8} className="offset-1">
                  <Label for="name" className="mt-2">
                    Product Image:
                  </Label>
                  <Input
                    type="file"
                    required
                    name="src"
                    className="input-register-box"
                    onChange={(event) => {
                      props.setFieldValue("src", event.target.files[0]);
                    }}
                    style={{ padding: "2px" }}
                  />
                </Col>
              </Row>
              <Row form>
                <Button
                  color="primary"
                  className="add-btn mt-2"
                  style={{ marginLeft: "400px" }}
                  type="submit"
                >
                  Submit
                </Button>
              </Row>
              <ToastContainer />
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

export default AddProduct;
