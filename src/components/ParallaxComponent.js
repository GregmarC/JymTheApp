import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const ParallaxComponent = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('../images/running2.jpg')}
            bgImageAlt="stars"
            strength={200}
        >
            <div style={{ height: '50vh' }} />
        </Parallax>
    </div>
);
export default ParallaxComponent;