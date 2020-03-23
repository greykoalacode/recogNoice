import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import  imageURL from './dahead.webp' ;
const Logo =() => {
    return (
        <div className='center'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
             <div className="Tilt-inner pa3"> <img style={{width:'100px',textAlign:'center'}} alt='logo' src={imageURL}></img> </div>
            </Tilt>
        </div>
    );
}
export default Logo;