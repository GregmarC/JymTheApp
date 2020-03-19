import React from 'react';
import { Media } from 'reactstrap';
import confused from '../images/confused.jpg';

const MediaComponent = () => {
  return (
    <div className="row">
        <div className="col-12 col-lg-4" style={{paddingTop:"30px"}}>
          <img className="img-fluid" src={confused} alt="confused"/>
        </div>
        <div className="col-12 col-lg-6 offset-lg-1" style={{paddingTop:"5px"}}>
          <Media body>
            <Media heading>
              <h2>So.....How exactly does Jym work???</h2>
            </Media>
            <p style={{paddingTop: "20px"}}>
            Jym works by connecting you with one of many personal trainers in your immediate area who want to share with you the 
            gift of fitness and exercise! Through Jym, the trainers can come to you wherever you'd like; your home, a nearby park, 
            a nearby track, the world is your Jym! </p>

            <p style={{paddingTop: "20px"}}>The assertion that "Jym" makes is that you truly don't <b>NEED</b> anything special to achieve fitness and exercise. As long
            as you can move, you can exercise! That being said, you don't need a gym, weights, or any fancy equipment to make health and fitness gains. 
            In turn, our Jym trainers will gravitate towards the primary use of calisthenics since the ground and your own body weight are already more than 
            enough to help you build impressive, healthy, fit, aesthetic bodies!
            </p>    
          </Media>
        </div>

    </div>
    
  );
};

export default MediaComponent;