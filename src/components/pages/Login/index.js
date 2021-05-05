import { useState } from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import Inputs from '../../atoms/Input';


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
    <div>
      <div style={{display: "flex"}}>
      <Container style={{flex: "1 0 1px"}}/>
      <Container style={{flex: "4 0 1px"}}>
        <br></br>
        <h3>Login</h3>
      <Form>
      <Inputs inputTitle="Username" placeholder="Enter username" value ={username} onChange={(e)=>setUsername(e.target.value)}/>
      <Inputs inputTitle="Password" placeholder="Enter password" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <Button variant="primary" type="submit" onClick={(e)=>{
          e.preventDefault()
          console.log(username, password)}}> 
        Submit
      </Button> 
      </Form>
      </Container>
      <Container style={{flex: "1 0 1px"}}/>
    </div>
    </div>
    )
}

export default Login