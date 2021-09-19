import React, { Component } from 'react'
import axios from 'axios';
//import OwnerBooks from './components/OwnerBooks';
 class App extends Component {
constructor(props){
  super(props);
  this.state={
    databook:[]
  }
}

// componentDidMount=async()=>{
//   let data1= await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/Book`).then(response=>{
//     this.setState({
//       databook:data1.data
//     })
//   })
// }

  render() {
    return (
     <>
        <h1>Can of Books</h1>
    {/* {
      this.state.data.map(item=>{
        return<OwnerBooks
        title={item.title}
        description={item.description}
        status={item.status}
        />
      })
    } */}
      </>
    
    )
  }
}

export default App