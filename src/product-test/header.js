import React from "react";
import './Header.css'
import {Link, NavLink} from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:false,
            price:false,
            rating:false,
            
        }
    }
    componentDidMount(){
        if(this.props.value===1){
            this.setState({name:true})
        }
        if(this.props.value===2){
            this.setState({price:true})
        }
        if(this.props.value===3){
            this.setState({rating:true})
        }
        
    }
    render(){
        const {name,price,rating}=this.state
     let activeStyle = {
    textDecoration: "underline",
  }
        return(
            <div>
                <Link to='/rank'><button className={name?'btn-primary':'btn-secondary'}>Name</button></Link>
                <Link to='/name'><button className={price?'btn-primary':'btn-secondary'}>Price</button></Link>
                <Link to='/age'><button className={rating?'btn-primary':'btn-secondary'}>Rating</button></Link>
           
               
            </div>
        )
    }
}
export default Header