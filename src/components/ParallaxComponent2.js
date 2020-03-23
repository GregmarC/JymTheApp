import React from 'react';
import { Parallax } from 'react-parallax';
 
const ParallaxComponent2 = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('../images/cyclist3.jpg')}
            bgImageAlt="stars"
            strength={200}
        >
            <div style={{ height: '50vh' }} />
        </Parallax>
    </div>
);
export default ParallaxComponent2;