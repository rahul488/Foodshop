import React, { useState } from "react";
import { Row, Col, NavLink } from "reactstrap";
import "./Userdashboard.css";
import { NavLink as RRNavLink, useRouteMatch, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function Userdashboard() {
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
            <div className="sidebar">
              <i className="fas fa-times time mt-2" onClick={toggle}></i>
              <div className="sidebar-content">
                <ul>
                  <li className="sidebar-menu">
                    <NavLink
                      to={`${match.url}/profile`}
                      tag={RRNavLink}
                      activeClassName="active"
                    >
                      <span>
                        <i className="fas fa-user-circle items"></i>
                      </span>
                      &nbsp;Your Profile
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
          <Route path={`${match.url}/`} component={UserProfile} exact />
          <Route path={`${match.url}/profile`} component={UserProfile} exact />
        </Col>
      </Row>
    </>
  );
}

export default Userdashboard;
