import React, { Component } from 'react';
import { googleKey } from '../shared/googleKey';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from './GoogleMapComponent';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {auth} from '../firebase.js';
import {db} from '../firebase.js';

export class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        let user = auth.currentUser;
        if (user == null){
            console.log("You must be signed in first to make an appointment with the Jym App");
            alert("You must be signed in first to make an appointment with the Jym App");
        }
        else{
            this.toggleModal();

            //appointment details
            const name = this.userName.value;
            const age = this.userAge.value;
            const fitLevel = this.fitnessLevel.value;
            const fitGoal = this.fitnessGoal.value;
            const address = this.exampleAddress.value;
            const city = this.exampleCity.value;
            const state = this.exampleState.value;
            const zip = this.exampleZip.value;
            const comments = this.comments.value;

            let data = {
                name: name,
                age: age, 
                fitLevel: fitLevel,
                fitGoal: fitGoal,
                address: address,
                city: city,
                state: state,
                zip: zip,
                comments: comments
            };

            event.preventDefault();
            let setDoc = db.collection('appointments').doc(user.email).set(data);

            return setDoc.then(() => {
                console.log("Appointment Created!");
                console.log('Appointment Set into Database: ', data);
                alert("Thank you! Your appointment has been created. You will be notified when a Jym trainer accepts your appointment request.");
              });   
        }
    }

    render() {

        return (
            <div>
                <div className="col-12">
                    <Button color="primary" onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg mr-2"></span>Make an Appointment</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Create Appointment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="name"><b>Your Name</b></Label>
                                <Input type="text" name="name" id="userName" placeholder="Your Name"
                                    innerRef = {(input) => this.userName = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="age"><b>Your Age</b></Label>
                                <Input type="text" name="age" id="userAge" placeholder="Your Age" 
                                innerRef = {(input) => this.userAge = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="fitnessLevel"><b>Approximate Fitness Level</b> (1-5 scale)</Label>
                                <Input type="select" name="select" id="fitnessLevel" innerRef = {(input) => this.fitnessLevel = input}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="fitnessGoal"><b>Primary Fitness Goal</b></Label>
                                <Input type="select" name="select" id="fitnessGoal" innerRef = {(input) => this.fitnessGoal = input}>
                                <option>Weight Loss</option>
                                <option>Build Muscle</option>
                                <option>Strength</option>
                                <option>Athletic/Sports Performance</option>
                                <option>General Health Maintenance</option>
                                <option>Other (please specify in comments below)</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress"><b>Address</b></Label>
                                <Input type="text" name="address" id="exampleAddress" 
                                innerRef = {(input) => this.exampleAddress = input}/>
                            </FormGroup>
                                <Row form>
                                    <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity"><b>City</b></Label>
                                        <Input type="text" name="city" id="exampleCity"
                                        innerRef = {(input) => this.exampleCity = input}/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState"><b>State</b></Label>
                                        <Input type="text" name="state" id="exampleState"
                                        innerRef = {(input) => this.exampleState = input}/>
                                    </FormGroup>
                                    </Col>
                                    <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip"><b>Zip</b></Label>
                                        <Input type="text" name="zip" id="exampleZip"
                                        innerRef = {(input) => this.exampleZip = input}/>
                                    </FormGroup>  
                                    </Col>
                                </Row>
                            <FormGroup>
                                <Label for="comments"><b>Additonal Comments</b></Label>
                                <Input type="textarea" name="text" id="comments" 
                                innerRef = {(input) => this.comments = input}/>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary"><span className="fa fa-sign-in fa-lg mr-2"></span>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

class Appointment extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (       
            <div className="container mb-4"> 
                {window.location.pathname === '/appointment' ? 
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Create Appointment</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Create An Appointment</h3>
                            <hr />
                        </div>                
                    </div>
            
                :
        
                    <div></div>
                } 
                
                <div className="map-container">    
                    <GoogleMap />
                </div>  
                <div className="d-flex justify-content-center m-3" style={{paddingTop: "20px"}}> 
                    <div className="col-md-7">
                        <h3>To begin, please provide your preferences by creating an appointment</h3>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-2" style={{paddingBottom: "20px"}}> 
                        <AppointmentForm />
                </div>           
            </div> 
        );
    }
}

export default Appointment;
