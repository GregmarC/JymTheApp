import React from 'react';
import { Card, CardImg, CardText, CardBody} from 'reactstrap';
import sleepy from '../images/sleepy.jpg';
import motivation from '../images/motivation.png';
import trainer from '../images/trainer.jpg';
import ParallaxComponent from './ParallaxComponent';
import ParallaxComponent2 from './ParallaxComponent2';
import MediaComponent from './MediaComponent';
import AppointmentComponent from './AppointmentComponent';


function Home(props) {
    return(
      <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-3 offset-lg-2" style={{paddingTop: "30px"}}>
              <Card>
                <CardImg src={sleepy} alt="sleepy" />
                <CardBody>
                  <CardText>
                    <div class="d-flex justify-content-center" style={{fontFamily: "Roboto", fontSize: "2vw 2vh"}}>Too sleepy? Too exhausted from work?</div>
                  </CardText>
                </CardBody>
              </Card>
                </div>
                <div className="col-12 col-lg-4" style={{paddingTop: "80px"}}>
                  <p>We all get tired and we all procrastinate. Fitting in time in your day to exercise can certainly be a grueling endeavor <b>ESPECIALLY</b> when you're already sapped of all your energy!</p>
                </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-5 offset-lg-3" style={{paddingTop: "90px"}}>
                  <p>Or maybe, you do have the energy to exercise <b>BUT</b> the motivation is no where to be found. Having a gym buddy (particularly one that knows what he or she is doing when it comes to fitness) can make a world of difference in giving you that little push you need to get you moving, active, and <b>FIT!</b> </p>
              </div>
              <div className="col-12 col-lg-3">
              <Card>
                <CardImg src={motivation} alt="demotivated" />
                <CardBody>
                  <CardText>
                    <div class="d-flex justify-content-center" style={{fontFamily:"Roboto", fontSize:"2vw 2vh"}}>No Motivation?</div>
                  </CardText>
                </CardBody>
              </Card>
                </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-3 offset-lg-2" style={{paddingTop: "30px", paddingBottom: "50px"}}>
              <Card>
                <CardImg src={trainer} alt="trainer" />
                <CardBody>
                  <CardText>
                    <div class="d-flex justify-content-center" style={{fontFamily:"Roboto", fontSize:"2vw 2vh"}}>Now with "JYM" there's one less excuse!</div>
                  </CardText>
                </CardBody>
              </Card>
              </div>
              <div className="col-12 col-lg-5" style={{paddingTop: "100px"}}>
                  <p>This is where <b>JYM</b> comes into play! Why not bring the "jym" to you? Do you need a gym membership, a personal training bundle, or even weights to exercise and achieve fitness? Hell No! Can you move? You can?! Then you can exercise! Jym is here to help you reach your fitness goals!</p>
              </div>
            </div>
          </div>
        <ParallaxComponent />
        <div className="container" style={{marginTop: "60px", marginBottom: "60px"}}>
          <MediaComponent />
        </div>
        <ParallaxComponent2 />
        <div className="container" style={{marginTop: "80px", marginBottom: "120px", justifyContent: "center"}}>
          <h3 style={{paddingBottom:"40px"}}>So....Now that you know how much easier it is to achieve health and fitness..What are you waiting for?! Get started now with JYM.</h3>
          <AppointmentComponent />
        </div>
      </div>
      
          
    );
}

export default Home;   