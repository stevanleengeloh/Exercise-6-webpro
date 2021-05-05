import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Inputs from "../../atoms/Input";
import firebase from "../../../config/firebase";

const Exercise6 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const data = {
      email: email,
      name: name,
    };

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const userId = userCredential.user.uid;
        firebase
          .database()
          .ref("users/" + userId)
          .set(data);
        // ...
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };

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
              inputTitle="Email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Inputs
              inputTitle="Password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
                console.log(name);
              }}
            >
              Submit
            </Button>
          </Form>
        </Container>
        <Container style={{ flex: "1 0 1px" }} />
      </div>
    </div>
  );
};

export default Exercise6;
