import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Button,
  Modal,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./ContactUs.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Error from "../Error/Error";

const ContactUs = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const initialValues = {
    name: "",
    number: "",
    issue: "",
  };
  const onSubmit = (values) => {
    toggle();
  };
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required !";
    } else if (values.name.length < 5) {
      errors.name = "Name at least 5 characters long";
    }
    if (!values.number) {
      errors.number = "Required !";
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(values.number)) {
      errors.number = "Number should be 10 digit long";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div className="background"></div>
          <h2 className="mt-3 text-center">Enter Your Issue Here</h2>
          <div className="devider"></div>
          <Row form className="input-align mt-5">
            <Col md={5}>
              <FormGroup>
                <Label for="firstName" style={{ color: "white" }}>
                  FirstName:
                </Label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="contact-input"
                />
                <ErrorMessage name="name" component={Error} />
              </FormGroup>
            </Col>
          </Row>
          <Row form className="input-align">
            <Col md={5}>
              <FormGroup>
                <Label for="lastName" style={{ color: "white" }}>
                  Mobile Number:
                </Label>
                <Field
                  type="text"
                  name="number"
                  id="number"
                  className="contact-input"
                />
                <ErrorMessage name="number" component={Error} />
              </FormGroup>
            </Col>
          </Row>
          <Row form className="input-align">
            <Col md={5}>
              <FormGroup>
                <Label for="issue" style={{ color: "white" }}>
                  Enter Your Issue:
                </Label>
                <Field
                  type="text"
                  name="issue"
                  id="issue"
                  className="contact-input"
                />
                <ErrorMessage name="issue" component={Error} />
              </FormGroup>
            </Col>
          </Row>

          <Button type="submit" color="danger" className="btn-content">
            Submit
          </Button>
        </Form>
      </Formik>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Message:</ModalHeader>
        <ModalBody>
          {
            <>
              <h6>
                Yor Complaint has received by our Customer executive.We will
                Contact You Soon.
              </h6>
              <br />
              <h5>Thank You !</h5>
            </>
          }
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ContactUs;
