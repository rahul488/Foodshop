import axios from "axios";
import React, { useState, useEffect } from "react";
import baseUrl from "../../__Url__/baseUrl";
import { Table } from "reactstrap";
import "./UserProfile.css";

function UserProfile() {
  const [user, setuser] = useState({
    fName: "",
    lName: "",
    email: "",
    state: "",
    district: "",
    pincode: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const customHeaders = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    };
    axios
      .get(`${baseUrl}/user/getUser`, {
        headers: customHeaders
      })
      .then(
        response => {
          setuser(response.data);
        },
        error => {
          console.log("error");
        }
      );
  }, []);

  return (
    <>
      <h2 className="text-center">Your Details</h2>

      <Table className="profile-table">
        <tr>
          <th>First Name</th>
          <td style={{ fontWeight: "bold" }}>{user.fName}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td style={{ fontWeight: "bold" }}>{user.lName}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td style={{ fontWeight: "bold" }}>{user.email}</td>
        </tr>
        <tr>
          <th>State</th>
          <td style={{ fontWeight: "bold" }}>{user.state}</td>
        </tr>
        <tr>
          <th>District</th>
          <td style={{ fontWeight: "bold" }}>{user.district}</td>
        </tr>
        <tr>
          <th>Pincode</th>
          <td style={{ fontWeight: "bold" }}>{user.pincode}</td>
        </tr>
      </Table>
    </>
  );
}

export default UserProfile;
