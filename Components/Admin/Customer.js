import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../../__Url__/baseUrl";
import {  Table } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function Customer() {
  const [customers, setcustomers] = useState([
    {
      fName: "",
      lName: "",
      email: "",
      state: "",
      pincode: "",
    },
  ]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    axios
      .get(`${baseUrl}/admin/get-customers`, {
        headers: headers,
      })
      .then(
        (response) => {
          setcustomers(response.data);
        },
        (error) => {
          toast.error("You are not authorized", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      );
  }, []);
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>State</th>
            <th>Pincode</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.email}</td>
                <td>{user.state}</td>
                <td>{user.pincode}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ToastContainer />
    </>
  );
}

export default Customer;
