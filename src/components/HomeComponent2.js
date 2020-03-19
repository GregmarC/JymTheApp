import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import bronze from '../images/bronze.jpg';
import silver from '../images/silver.jpg';
import gold from '../images/gold.jpg';
import { Parallax } from './ParallaxComponent';
import { Parallax2 } from './ParallaxComponent2';
import { About } from './AboutComponent';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


export default class Home2 extends Component {

  constructor(props){
    super(props);

    this.M=window.M;
  }

  componentDidMount() {
    var elems1 = document.querySelectorAll(".slider");
    var instances1 = this.M.Slider.init(elems1, {interval: 10000});
  }


  render() {
  return(
    <div>
        <div className="container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
        </div>
      <Parallax />
        <section className="container section" id="photo">
            <div className="row">
                <div className="col s12 l1">
                    <img style={{maxWidth: 350}} src={bronze} alt="bronzePic" class="responsive-img"/>
                </div>
                <div className="col s12 l6 pull-l1">
                  <h2 className="indigo-text text-darken-4">Bronze Plan</h2>
                  <p>With the bronze plan you get.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l5 push-l7 offset-l1">
                    <img style={{maxWidth: 350}} src={silver} alt="silverPic" class="responsive-img"/>
                </div>
                <div className="col s12 l6 pull-l4 offset-l2 silverInfo mr-5">
                  <h2 className="indigo-text text-darken-4">Silver Plan</h2>
                  <p>With the silver plan you get.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l1">
                    <img style={{maxWidth: 350}} src={gold} alt="goldPic" class="responsive-img"/>
                </div>
                <div className="col s12 l6 pull-l1">
                  <h2 className="indigo-text text-darken-4">Gold Plan</h2>
                  <p>With the gold plan you get.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci</p>
                </div>
            </div>
        </section>
      <Parallax2 />
        <div className="container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio excepturi dolore ipsum dolor unde deleniti odit non repellendus adipisci sunt doloremque, accusamus corporis? Eligendi, fugit. Laborum vero magni dolorem corrupti!</p>
        </div>
  </div>
  );
  }
}
