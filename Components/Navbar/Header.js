import React, { useState } from "react";
import "./Header.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as RRNavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { afterLogout, isLoggedOut } from "../../actions/LoginAction";

function Header() {
  const history = useHistory();

  const dispatch = useDispatch();

  const total_cart = useSelector((state) => state.addProduct.count);

  const isLoggedin = useSelector((state) => state.isLogin.isLoggedin);
  const name = useSelector((state) => state.getUsername.userName);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const seeCart = () => {
    history.push("/cart-details");
  };

  const logout = () => {
    dispatch(isLoggedOut());
    dispatch(afterLogout());
    localStorage.removeItem("token");
    history.push("/");
  };
  const userDashboard = () => {
    history.push("/user-dashboard");
  };
  const adminDashboard = () => {
    history.push("/admin");
  };

  return (
    <>
      <Navbar color="dark" className="navbar" light expand="md">
        <NavbarBrand>
          <span className="header_text">Food4You</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="menu" navbar>
            <NavItem>
              <NavLink to="/" tag={RRNavLink}>
                <span className="header_text">Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/service" tag={RRNavLink}>
                <span className="header_text">Services</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" tag={RRNavLink}>
                <span className="header_text">Contact</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={RRNavLink}>
                <span className="header_text">About</span>
              </NavLink>
            </NavItem>
            {isLoggedin ? (
              <UncontrolledButtonDropdown className="ml-5">
                <DropdownToggle
                  caret
                  className="ml-5"
                  style={{ backgroundColor: "#080c01" }}
                >
                  {name}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    tag="button"
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </DropdownItem>
                  <DropdownItem divider />
                  {name !== "ADMIN" ? (
                    <DropdownItem
                      tag="button"
                      onClick={userDashboard}
                      style={{ cursor: "pointer" }}
                    >
                      Profile
                    </DropdownItem>
                  ) : (
                    <DropdownItem
                      tag="button"
                      onClick={adminDashboard}
                      style={{ cursor: "pointer" }}
                    >
                      Settings
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            ) : (
              <NavItem>
                <NavLink to="/login" tag={RRNavLink}>
                  <span className="header_text">Login</span>
                </NavLink>
              </NavItem>
            )}
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                {total_cart > 0 ? (
                  <>
                    <span className="total_cart">{total_cart}</span>
                    <i className="fas fa-circle notifications"></i>
                  </>
                ) : (
                  ""
                )}
                <i onClick={seeCart} className="fas fa-cart-plus icon"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
