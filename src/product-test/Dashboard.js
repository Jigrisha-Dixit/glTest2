import React from 'react';
import data from './bookData';
class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
        data:[]
    }
}
componentDidMount(){
    this.setState({data:data.list})
}
  render(){
  return(
    <div>
    <h2>Dashboard</h2>
    <header></header>
<div>
  
{


}                           
</div>
</div>
  );
  }
}
export default Dashboard;