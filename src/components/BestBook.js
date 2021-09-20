import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import Book from './Book';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class BestBook extends Component {
  constructor(props){
    super(props);
    this.state={
      databook:[],
      title:"",
      description: '',
      status: '',
      modal:false,
      showbook:false
    }
  }
  
  componentDidMount=()=>{
  axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/book`)

  .then(response=>{
      this.setState({
        databook:response.data,
        showbook:true
      })
    })
  }
////////////////////////////////////////

newTitle = (e) => this.setState({ title: e.target.value });
newDescription = (e) => this.setState({ description: e.target.value });
newStatus = (e) => this.setState({status : e.target.value });



///////////////////////////////////////////
openCreateModal = () => 
this.setState({ 
  modal: true 

});


closeCreateModal = () => 
this.setState({
  modal: false 
});
//////////////////////////////////////////
addBook = async(e)=>{
  e.preventDefault();

  const BookFormModal ={
    title: this.state.title,
    status:this.state.status,
    description:this.state.description,
  }

  const newBookFromModal = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/create-book`, BookFormModal)
  this.setState({
      book: newBookFromModal.data,
      modal:false
  });

}
//////////////////////////////////////////

  
  handleDelete=(id)=>{
    let bookId=id;
    let config={
        method:"DELETE",
        baseURL:`${process.env.REACT_APP_BACKEND_SERVER}`,
        url:`/delete-book/${bookId}`,

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

      <Button variant="primary" onClick={this.openCreateModal}>
       Add Book
      </Button>

      <Modal show={this.state.modal} onHide={this.closeCreateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Book</Modal.Title>
        </Modal.Header>
        <Modal.Body> 


        {/* <FormGroup controlId="code">
   <FormControl onChange={handleChange} bsSize="large" rows="20" componentClass="textarea" placeholder="Code here..." />
  </FormGroup> */}



<form onSubmit={(e)=>this.addBook(e)}>
<fieldset disabled>
 <div class="form-group">
   <label for="title">Title of Book</label>
     <input type="text" id="title" class="form-control" placeholder="Type title"/>
   </div>
   <div class="form-group">
     <label for="description">The description </label>
     <input type="text" id="description" class="form-control" placeholder="Type description"/>
       </div>

       <div class="form-group">
     <label for="status">The status </label>
     <input type="text" id="status" class="form-control" placeholder="Type status"/>
       </div>
   </fieldset>
 </form>
      



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


      ///////////////add delete///////////

      {
        this.state.showbook&&this.state.databook.map((item,e)=>{
          return(
        <h1>title={item.title}</h1>,     
          <p>description={item.description}</p>,
           <h2> status={item.status}</h2>,

           <Button variant="primary" onClick={() => this.handleDelete(e)}>
           Delete book
       </Button>
          )
        })
      }
    </>



    );
}
}


export default BestBook




    //   <div>
    //   <form onSubmit={this.handleSubmit}>
    //     <input type="text" placeholder="type new book  here" onChange={this.handleBookInput}/>
    //     <input type="submit" value="create book"/>
    //   </form>
    //   {
    //     this.state.databook.map(item=>{
    //       return <Book 
    //                 bookName={item.bookName} 
    //                 description={item.description}
    //                 status={item.status}
    //                 user={item.user} 
    //                 bookId={item._id}
    //                 handleDelete={this.handleDelete}
                    
    //                 />
    //     })
    //   }
    // </div>






// <form onSubmit={(e)=>this.addBook(e)}>
// <fieldset disabled>
//   <div class="form-group">
//     <label for="disabledTextInput">Title of Book</label>
//     <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"/>
//   </div>
//   <div class="form-group">
//     <label for="disabledSelect">Disabled select menu</label>
//     <select id="disabledSelect" class="form-control">
//       <option>Disabled select</option>
//     </select>
//   </div>
//   <div class="form-check">
//     <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
//     <label class="form-check-label" for="disabledFieldsetCheck">
//       Can't check this
//     </label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </fieldset>
// </form>