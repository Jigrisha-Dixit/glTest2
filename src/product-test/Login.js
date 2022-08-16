import React from "react";
import { useState } from "react";
import "./login.css";
class LoginPage extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({username:e.target.value})
        this.setState({password:e.target.value})
    }
    handleLogin=(e)=>{
        e.preventDefault()
        if(this.state.username==="admin"&&this.state.password==="admin"){
        this.props.navigate(`/dashboard`)}
        else{
            alert("invalid");
        }
    }
    render(){
        return(
            <div className="container">
               <div> Username:<input type='text' onChange={(e)=>this.handleChange(e)}></input></div>
                <div>Password:<input type='text' onChange={(e)=>this.handleChange(e)}></input></div>
              <div> <button onClick={(e)=>this.handleLogin(e)}>login</button></div>
            </div>
            
        )
    }
    }
    export default LoginPage