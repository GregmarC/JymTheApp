import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import {StandaloneToggleButton} from './ToggleButtonComponent';



function About(props) {

    
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Jym</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Jym</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2020, <em><b>Jym's</b></em> mission is to raise the total fitness and health of the nation through exercise, education and awareness, and nutrition. In modern society, it is far too easy to fall victim to poor health practices, often times without us even realizing it.  There are many factors that contribute to the overall poor health of the nation, however, two of the main culprits are easily lack of exercise and diet.  </p>
                    <p>Fortunately, <em><b>Jym</b></em> is here to combat the shortcomings of the nation's health policies and keep us all feeling healthier and looking better!</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">Feb. 2020</dd>
                                <dt className="col-6">Total Jym Users</dt>
                                <dd className="col-6">TBD</dd>
                                <dt className="col-6">Total Jym Trainers</dt>
                                <dd className="col-6">TBD</dd>
                                <dt className="col-6">Total Jym Workouts</dt>
                                <dd className="col-6">TBD</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">If there were a drug that could do for human health everything that exercise can, it would likely be the most valuable pharmaceutical ever developed.</p>
                                <footer className="blockquote-footer">Dr. Mark Tanopolsky,
                                <cite title="Source Title">Genetic Metabolic Neurologist at McMaster University in Ontario</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default About;    
