import React from "react";
import Button from 'react-bootstrap/Button';
import '../Components/styles/loginform.css';
import '../Components/styles/loginbutton.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'





export default class LoginForm extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      loginInfo:{
        username: "",
        password: "",
        email: ""
      }
      
    };
  }

  buttonStyle=
  {
    height:50,
    width:"90%",
    margin:10
  }

  render() 
  {
    return(
      <div className="authFormWrapper">
        <div className="authForm">
          <div className="loginForm">
            <Badge><h3>Log In</h3></Badge>
            <InputGroup style={{width:"90%", display:"flex", flexDirection:"column"}} className="mb-3 input">
              <FormControl style={{width:"100%", display:"flex", flexDirection:"column", marginTop:10, borderRadius: 0}}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup style={{width:"90%", display:"flex", flexDirection:"column"}} className="mb-3 input">
              <FormControl style={{width:"100%", display:"flex", flexDirection:"column", marginTop:10, borderRadius: 0}}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          
            <Button onClick={()=>this.login()} style={this.buttonStyle} variant="warning">Log In</Button>
          </div>
          <div className="registerForm">
          <Badge style={{backgroundColor:""}}><h3>Register</h3></Badge>
          <InputGroup style={{width:"90%", display:"flex", flexDirection:"column"}} className="mb-3 input">
              <FormControl style={{width:"100%", display:"flex", flexDirection:"column", marginTop:10, borderRadius: 0}}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup style={{width:"90%", display:"flex", flexDirection:"column"}} className="mb-3 input">
              <FormControl style={{width:"100%", display:"flex", flexDirection:"column", marginTop:10, borderRadius: 0}}
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup style={{width:"90%", display:"flex", flexDirection:"column"}} className="mb-3 input">
              <FormControl style={{width:"100%", display:"flex", flexDirection:"column", marginTop:10, borderRadius: 0}}
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          
            <Button onClick={() => this.register()} style={this.buttonStyle} variant="warning">Register</Button>
          </div>
        </div>
      </div>
    );
  }

  login(username, password)
  {
    this.setState({ username: username, password: password })


    const loginInfo = [this.state.loginInfo]
  
       
        this.setState({loginInfo});

        console.log(this.state.username);
  }

  register()
  {
    console.log("hmm");
  }
}

