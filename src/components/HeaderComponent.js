import React, {Component} from 'react';
import {Navbar, Nav, NavbarToggler, Collapse, NavItem, Jumbotron as Jumbo, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {auth} from '../firebase.js'
import {db} from '../firebase.js';
import styled from 'styled-components';
import exercise from '../images/exercise.jpg';
import '../App.css';

const Styles = styled.div`
    .jumbo {
        background: url(${exercise}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 40vh;
        position: relative;
        z-index: -2;
    }
`;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state= {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpen2: false,
            signedIn: false,
            user: ""
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.toggleUser = this.toggleUser.bind(this);
        this.userLogOut = this.userLogOut.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleModal2() {
        this.setState({
            isModalOpen2: !this.state.isModalOpen2
        });
    }

    toggleUser(){
        this.setState({
            signedIn: !this.state.signedIn
        });
    }

    handleLogin(event) {
        this.toggleModal();

        //user
        const userEmail = this.email2.value;
        const userPassword = this.password.value;
        
        alert("You have successfully logged in! Email: " + this.email2.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);

        event.preventDefault();

        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(cred => {
            console.log("User successfully signed in!: ", cred.user.email);
            this.toggleUser();
            this.setState({user: userEmail});

            const userUid = auth.currentUser.uid;
            console.log("This is the user's uid: ", userUid);
        })
    }

    userLogOut(event){
        
        auth.signOut()
        .then(() => {
            alert("You have successfully signed out.");
        });

        if (this.state.signedIn == true){
        this.toggleUser();
        this.setState({user:""});
        }
    }

    handleRegistration(event){
        this.toggleModal2();

        //user details
        const userEmail = this.email.value;
        const userPassword = this.password2.value;

        //jsonWebToken
        const jwt = require('jsonwebtoken');

        event.preventDefault();

        auth.createUserWithEmailAndPassword(userEmail, userPassword)
            .then(cred => {
                const user = cred.user.email;
                this.setState({user: user});
                const token = jwt.sign({user}, 'secret_dawwwg');
                return db.collection('users').doc(cred.user.uid).set({
                    email : cred.user.email,
                    apiKey: token,
                    status: "",
                    subscriptionEndDate: "",
                    stripeToken: "",
                });
            }).then((cred) => {
                alert("User Created and added to firebase!");
                this.toggleUser();
            });
    }


    render() {

        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container-fluid">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to='/checkout'><span className="fa fa-shopping-cart fa-lg"></span> Checkout </NavLink> 
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to='/appointment'><span className="fa fa-shopping-cart fa-lg"></span> Make Appointment </NavLink> 
                                </NavItem>
                            </Nav>

                            {this.state.signedIn ? 

                                <Nav className="ml-auto" navbar>
                                    <div className="ml-3 md-3">
                                        <NavItem>
                                            <Button><span className="fa fa-map-pin fa-lg"></span> Logged in as: {this.state.user}</Button>
                                        </NavItem>
                                    </div>
                                    <NavItem>
                                        <div className="ml-3 md-3">
                                            <NavLink className="nav-link" to='/dashboard'><span className="fa fa-user fa-sm"></span> My Dashboard </NavLink> 
                                        </div>
                                    </NavItem>   
                                    <NavItem>
                                        <div className="ml-3 md-3">
                                            <Button outline onClick={this.userLogOut}>
                                                <span className="fa fa-sign-out-alt fa-lg"></span> Log Out</Button>
                                        </div>
                                    </NavItem>
                                </Nav>
                                                                                        
                                :
                            
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <div className="ml-3 md-3">
                                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                        </div>
                                    </NavItem>
                                    <NavItem>
                                        <div className="ml-3 md-3">
                                            <Button outline onClick={this.toggleModal2}>
                                                <span className="fa fa-sign-in fa-lg"></span> Register</Button>
                                        </div>
                                    </NavItem>
                                    <NavItem>
                                        <div className="ml-3 md-3">
                                            <Button outline onClick={this.userLogOut}>
                                                <span className="fa fa-sign-out-alt fa-lg"></span> Log Out</Button>
                                        </div>
                                    </NavItem>
                                </Nav>                           
                            }
                                                                
                        </Collapse>
                    </div>
                </Navbar>
                <Styles>
                    <Jumbo fluid className="jumbo">
                        <div className="overlay">
                            <Container className="flex">
                                <Row>
                                    <h1 style={{color: 'black', fontFamily: "Roboto", fontSize: "8vw"}}>Jym The App</h1>
                                </Row>
                                <Row>
                                    <p className="logomotto" style={{color: 'black', fontFamily: "Roboto", fontSize: "5vw 5vh", paddingLeft: "30px"}}><b>Exercise! You know you gotta!</b></p>
                                </Row>
                            </Container>          
                        </div>
                    </Jumbo>
                </Styles>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email2">Email</Label>
                                <Input type="text" id="email2" name="email2"
                                    innerRef={(input) => this.email2 = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleRegistration}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password2" name="password"
                                    innerRef={(input) => this.password2 = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign Up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;