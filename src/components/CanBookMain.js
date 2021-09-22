import React, { Component } from 'react'
//import BestBook from './components/BestBook';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Profile from './components/Profile';
// import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import { Container } from 'react-bootstrap';
import BookFormModal from './BookFormModal';
import MyBestBook from './MyBestBook';


const REACT_APP_BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
export class CanBookMain extends Component {


    constructor(props){
        super(props);
        this.state={
          databook:[],
    
          title:"",
          description: '',
          status: '',
          email:'',
    
          lastTitle: '',
          lastDescription: '',
          lastStatus: '',
          lastEmail:'',
    
          bookid:'',
         showBookModal:false
        }
      }
      
      componentDidMount= ()=>{
      axios.get(`${REACT_APP_BACKEND_SERVER}/book-get`)
    
      .then(response=>{
          this.setState({
            databook:response.data,
           
          })
        }).then(data=>console.log(data))
      }
    ////////////////////////////////////////
    
    newTitle = (e) => this.setState({ title: e.target.value });
    newDescription = (e) => this.setState({ description: e.target.value });
    newStatus = (e) => this.setState({status : e.target.value });
    newEmail = (e) => this.setState({email : e.target.value });
    
    updatetitle = (e) => this.setState({ lastTitle: e.target.value });
    updateDescription = (e) => this.setState({ lastDescription: e.target.value });
    updateStatus = (e) => this.setState({ lastStatus: e.target.value });
    updateEmail = (e) => this.setState({ lastEmail: e.target.value });
    
    ///////////////////////////////////////////
    openCreateModal = () => 
    this.setState({ 
     showBookModal: true 
    
    });
    
    
    closeCreateModal = () => 
    this.setState({
      showBookModal: false 
    });
    
    // updateClosebook=()=>{
    //   this.setState({
    //  showBookModal:false,
    //   })
    // }
    ////////////////// ADD BOOK ////////////////////////
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
    
    // handleUpdate=(bookid,title,description,status,email)=>{
    //   this.setState({
    //     bookid:bookid,
    //     title:title,
    //     description:description,
    //     status:status,
    //     email:email,
    //     showBookModal:true,
    
    //   })
    // }
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
      url:`/update-book/${this.state.bookid}`,
      data:{
        title: this.state.lastTitle,
                email: this.props.lastEmail,
            status: this.state.lastStatus,
             description: this.state.lastDescription,
      }
    }
    axios(config).then(res=>{
      this.setState({
        databook:res.data
      })
    });
    }
    
    //////////////////////////////////////////
    
      
      handleDelete=(bookid)=>{
        
        let config={
            method:"DELETE",
            baseURL:`${REACT_APP_BACKEND_SERVER}`,
            url:`/delete-book/${bookid}`,
    
        }
    
        axios(config).then(response=>{
          this.setState({
            databook:response.data
          })
        })
    }
    
    
    
      render() {
        return (
          <><>
    
    
    
    
    
            <Container>
              <Button variant="primary" onClick={this.openCreateModal}>
                Add Book
              </Button>
    
      </Container>
    
              {this.state.databook &&
                <MyBestBook
                  databook={this.state.databook}
                  handleDelete={this.handleDelete}
                  updatetitle={this.updatetitle}
                  updateDescription={this.updateDescription}
                  updateStatus={this.updateStatus}
                  UpdateForm={this.UpdateForm} />}
          
    
            <BookFormModal
              closeCreateModal={this.closeCreateModal}
              showBookModal={this.state.showBookModal}
              newTitle={this.newTitle}
              newDescription={this.newDescription}
              newStatus={this.newStatus}
              newEmail={this.newEmail}
              handelSubmit={this.handelSubmit} />
    
          </><>
    
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
            </></>
            
            
        
    
        )
      }
    }
    

 


export default CanBookMain
