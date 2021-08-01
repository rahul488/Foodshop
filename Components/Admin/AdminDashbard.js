import React, { useState } from "react";
import { Row, Col, NavLink } from "reactstrap";
import { NavLink as RRNavLink, useRouteMatch, Route } from "react-router-dom";
import AddProduct from "./AddProduct";
import Customer from "./Customer";

function AdminDashbard() {
  const [cancel, setcancel] = useState(false);

  const match = useRouteMatch();

  const toggle = () => {
    setcancel(!cancel);
  };

  return (
    <>
      <Row>
        {!cancel ? (
          <Col md={2}>
            <div className="sidebar" style={{ background: "black" }}>
              <i
                class="fas fa-times time mt-2"
                style={{ color: "white" }}
                onClick={toggle}
              ></i>
              <div className="sidebar-content">
                <ul>
                  <li className="sidebar-menu">
                    <NavLink
                      to={`${match.url}/add-product`}
                      tag={RRNavLink}
                      activeClassName="active-link"
                    >
                      <span>
                        <i className="fas fa-plus-circle items"></i>
                      </span>
                      &nbsp;Add Product
                    </NavLink>
                  </li>
                  <li className="sidebar-menu">
                    <NavLink
                      to={`${match.url}/customers`}
                      tag={RRNavLink}
                      activeClassName="active-link"
                    >
                      <span>
                        <i className="fas fa-users items"></i>
                      </span>
                      &nbsp;Our Customers
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        ) : (
          <i className="fas fa-bars bar mt-2" onClick={toggle}></i>
        )}
        <Col md={8}>
          <Route
            path={`${match.url}/add-product`}
            component={AddProduct}
            exact
          />
          <Route path={`${match.url}/customers`} component={Customer} exact />
        </Col>
      </Row>
    </>
  );
}

export default AdminDashbard;
