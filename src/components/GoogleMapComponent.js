import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {googleKey} from '../keys.js'
import '../App.css';
 
const AnyReactComponent = props => {
  return (
    <div>
      <div className="pin"></div>
      <div className="pulse">{<b>{props.text}</b>}</div>
    </div>
  )
}
 
class GoogleMap extends Component {

  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
      });
    }
      else{
        console.log("geolocation is not supported");
      }  
  }


  static defaultProps = {
    center: {
      lat: 40.816748499999996,
      lng: -74.1696245
    },
    zoom: 12
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '75%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${googleKey}` }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.816748499999996}
            lng={-74.1696245}
            text='Me'
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;