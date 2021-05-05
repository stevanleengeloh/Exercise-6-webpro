import React, { useState, useEffect } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Inputs from "../../atoms/Input";
import firebase from "../../../config/firebase";

const Exercise6 = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");

  const resetForm = () => {
    setName("");
    setDetail("");
    setButton("Submit");
    setSelected({});
  };

  const [names, setNames] = useState([]);

  const [button, setButton] = useState("Submit");

  const [selected, setSelected] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref("names")
      .on("value", (res) => {
        if (res.val()) {
          const rawData = res.val();
          const namesArr = [];
          Object.keys(rawData).map((item) => {
            return namesArr.push({
              id: item,
              ...rawData[item],
            });
          });
          setNames(namesArr);
        }
      });
  }, []);

  const onSubmit = () => {
    const data = {
      name: name,
      detail: detail,
    };
    console.log(data);
    if (button === "Submit") {
      //Insert
      firebase.database().ref("names").push(data);
    } else {
      //Update
      firebase.database().ref(`names/${selected.id}`).set(data);
    }
    resetForm();
  };

  const onUpdateData = (item) => {
    setName(item.name);
    setDetail(item.detail);
    setButton("Update");
    setSelected(item);
  };

  const onDeleteData = (item) => {
    firebase.database().ref(`names/${item.id}`).remove();
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Container style={{ flex: "1 0 1px" }} />
        <Container style={{ flex: "4 0 1px" }}>
          <br />
          <h3>Exercise6</h3>
          <br />
          <Form>
            <Inputs
              inputTitle="Name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Inputs
              inputTitle="Detail"
              placeholder="Enter detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              {button}
            </Button>
          </Form>
        </Container>
        <Container style={{ flex: "1 0 1px" }} />
      </div>
      <br />
      <div>
        <Container style={{ flex: "1 0 1px" }} />
        <Container style={{ flex: "4 0 1px" }}>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "70%" }}>Detail</th>
                <th style={{ width: "10%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {names.map((item) => {
                return (
                  <tr key={item.id}>
                    <td style={{ width: "20%" }}>{item.name}</td>
                    <td style={{ width: "70%" }}>{item.detail}</td>
                    <td style={{ width: "10%" }}>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => onUpdateData(item)}
                      >
                        Update
                      </button>
                      <button type="button" class="btn btn-danger" onClick={() => onDeleteData(item)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
        <Container style={{ flex: "1 0 1px" }} />
      </div>
    </div>
  );
};

export default Exercise6;
