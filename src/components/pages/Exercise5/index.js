import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import Inputs from '../../atoms/Input';
import Axios from 'axios';


const Exercise5 = () => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const saveData = () => {
      const data = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
      };
      Axios.post('http://localhost:3004/users', data);
    };

    return (
    <div>
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br/>
        <h3>Exercise5</h3>
        <br/>
      <Form>
      <Inputs inputTitle="Email" placeholder="Enter email" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Inputs inputTitle="First Name" placeholder="Enter first name" value ={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <Inputs inputTitle="Last Name" placeholder="Enter last name" value ={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      <br/>
      <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(email, firstName, lastName)
          saveData();
        }}> 
        Save Data
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default Exercise5