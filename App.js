import React, { Suspense } from "react";
import "./App.css";
import Header from "./Components/Navbar/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CartDatails from "./Components/Checkout/CartDatails";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import Userdashboard from "./Components/User/Userdashboard";
import AdminDashbard from "./Components/Admin/AdminDashbard";
import About from "./Components/About/About";
const Service = React.lazy(() => import("./Components/Service/Service"));
const Register = React.lazy(() => import("./Components/Register/Register"));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Suspense
          fallback={<div className="text-center loading">Loading...</div>}
        >
          <Route path="/register" component={Register} />
          <Route path="/service" component={Service} exact />
        </Suspense>
        <Route path="/cart-details" component={CartDatails} />
        <Route
          path="/contact"
          component={() => <ContactUs onSubmit={() => {}} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/user-dashboard" component={Userdashboard} />
        <Route path="/admin" component={AdminDashbard} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
