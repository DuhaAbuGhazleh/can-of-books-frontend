import React, { Component } from 'react'

//import BestBook from './components/BestBook';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
// import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import UpdateBookForm from './components/UpdateBookForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import MyBestBook from './components/MyBestBook';
const REACT_APP_BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

 class App extends Component {

  constructor(props){
    super(props);
    this.state={
      databook:[],
      title:"",
      description: '',
      status: '',
      email:'',
      id:'',
      modal:false,
     showbook:false
    }
  }
  
  componentDidMount=()=>{
  axios.get(`${REACT_APP_BACKEND_SERVER}/book-get`)

  .then(response=>{
      this.setState({
        databook:response.data,
        //showbook:true
      })
    }).then(data=>console.log(data))
  }
////////////////////////////////////////

newTitle = (e) => this.setState({ title: e.target.value });
newDescription = (e) => this.setState({ description: e.target.value });
newStatus = (e) => this.setState({status : e.target.value });
newEmail = (e) => this.setState({email : e.target.value });



///////////////////////////////////////////
openCreateModal = () => 
this.setState({ 
  modal: true 

});


closeCreateModal = () => 
this.setState({
  modal: false 
});

updateClosebook=()=>{
  this.setState({
 showbook:false,
  })
}
//////////////////////////////////////////
handelSubmit = (e)=>{
  e.preventDefault();

  let config={
    method:"POST",
    baseURL:`${REACT_APP_BACKEND_SERVER}`,
    url:`/create-book`,
    data:{
      title:this.state.title,
      email:this.state.email,
      description:this.state.description,
      status:this.state.status,
    }
  }
  axios(config).then(res=>{
    console.log(res.data)
    this.setState({
      databook:res.data
    })
  })
}

////////////////////////////////////////////////////

handleUpdate=(id,title,description,status,email)=>{
  this.setState({
    id:id,
    title:title,
    description:description,
    status:status,
    email:email,
    showbook:true,

  })
}
//////////////////   PUT  //////////////////////////
// updateForm = async (e) =>{
//   e.preventDefault();
//   const bookInformation = {
//       title: this.state.title,
//      // image_url: this.state.image_url,
//       email: this.props.email,
//       status: this.state.status,
//       description: this.state.description,
//   }
//   let updatebooksInfo = await axios.put(`${this.state.server}/update-book/${this.state.id}`, bookInformation)
//   this.setState({
//       book :updatebooksInfo.data,
//       showbook:false
//   })
// }
UpdateForm=()=>{

let config={
  method:"PUT",
  baseURL:`${REACT_APP_BACKEND_SERVER}`,
  url:`/update-book/${this.state.id}`,
  data:{
    title: this.state.title,
             email: this.props.email,
          status: this.state.status,
          description: this.state.description,
  }
}
axios(config).then(res=>{
  this.setState({
    databook:res.data
  })
});
}

//////////////////////////////////////////

  
  handleDelete=(id)=>{
    
    let config={
        method:"DELETE",
        baseURL:`${REACT_APP_BACKEND_SERVER}`,
        url:`/delete-book/${id}`,

    }

    axios(config).then(response=>{
      this.setState({
        databook:response.data
      })
    })
}



  render() {
    return (
      <>

{
this.state.databook.map(item => {
          return <MyBestBook
            id={item._id}
            title={item.title}
            description={item.description}
            status={item.status}
            email={item.email}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        })
        }

        <Button variant="primary" onClick={this.openCreateModal}>
          Add Book
        </Button>

        <UpdateBookForm
          title={this.state.title}
          description={this.state.description}
          status={this.state.status}
          email={this.state.email}


          newTitle={this.newTitle}
          newDescription={this.newDescription}
          newStatus={this.newStatus}
          newEmail={this.newEmail}

          updateForm={this.updateForm}
         
          closeCreateModal={this.closeCreateModal}
       />

        <Modal show={this.state.modal} onHide={this.closeCreateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>



            <Form onSubmit={(e) => this.addBook(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="title" onChange={(e) => this.newTitle(e)} />

              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>description</Form.Label>
                <Form.Control type="text" placeholder="description" onChange={(e) => this.newDescription(e)} />

              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>status</Form.Label>
                <Form.Label>description</Form.Label>
                <Form.Control type="text" placeholder="description" onChange={(e) => this.newStatus(e)} />

              </Form.Group>


              <Button variant="primary" onClick={this.addBook}>
                Add book
              </Button>
            </Form>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeCreateModal}>
              Close
            </Button>
            <Button variant="primary" type='submit'>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>




   
      
      
      <>

          {/* <Router>
     
       
    <BestBook />
      <Switch>
        <Route exact path="/">
          <Header/>
        </Route>
        <Route path="/first">
          <Login/>
        </Route>
        <Route path="/second">
          <Profile />
        </Route>
      </Switch>
            
    </Router>
    <Footer /> */}
        </>
        
        
        </>

    )
  }
}

export default App 


          
    
          
      
     