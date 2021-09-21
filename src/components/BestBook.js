import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import BookForm from './BookForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export class BestBook extends Component {
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
  axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/book-get`)

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
addBook = async(e)=>{
  e.preventDefault();

  const addBookFormModal ={
    title: this.state.title,
    status:this.state.status,
    description:this.state.description,
    email:this.state.email,
  }

  const newBookFromModal = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/create-book`, addBookFormModal)
  this.setState({
      book: newBookFromModal.data,
      modal:false
  });

}
//////////////////////////////////////////

  
  handleDelete=(id)=>{
    
    let config={
        method:"DELETE",
        baseURL:process.env.REACT_APP_BACKEND_SERVER,
        url:`/delete-book/${id}`,

    }

    axios(config).then(response=>{
      this.setState({
        databook:response.data
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
updateForm = async (e) =>{
  e.preventDefault();
  const bookInformation = {
      title: this.state.title,
     // image_url: this.state.image_url,
      email: this.props.email,
      status: this.state.status,
      description: this.state.description,
  }
  let updatebooksInfo = await axios.put(`${this.state.server}/update-book/${this.state.id}`, bookInformation)
  this.setState({
      book :updatebooksInfo.data,
      showbook:false
  })
}


///////////////////////////////////////
render() {
    return (

      <>

      <Button variant="primary" onClick={this.openCreateModal}>
       Add Book
      </Button>

      <BookForm
      title={this.state.title} 
      description={this.state.description}
      status={this.state.status}
      email={this.state.email}


      newTitle={this.newTitle}
      newDescription={this.newDescription}
      newStatus={this.newStatus}
      newEmail={this.newEmail}

      updateForm={this.updateForm}
     showbook={this.state.showbook}
     closeCreateModal={this.closeCreateModal}
      handleUpdate={this.handleUpdate}

     
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