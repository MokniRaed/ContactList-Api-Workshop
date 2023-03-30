import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Dashboard() {
  const [Contacts, setContacts] = useState([]);

  //Get Contacts from the server
  const getCotacts = async () => {
    const data = await axios.get("http://localhost:3200/getusers");

    setContacts(data.data);
  };

  useEffect(() => {
    getCotacts();
  }, []);

  return (
    <div
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <h1> Welcome to Dashboard</h1>
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Contacts.map((elm, key) => (
            <tr>
              <td>{key}</td>
              <td>{elm.name}</td>
              <td>{elm.lastname}</td>
              <td>{elm.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;
