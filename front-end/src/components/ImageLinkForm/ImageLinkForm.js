import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 mr2 ml2'>
                {'This Magic Brain will detect faces in your pictures.Copy & Paste the image link below.Give it a try.'}
            </p>
            <div className='center'>
                <div className='conta center'>
                    <input className='center input-style' type='text' onChange={onInputChange} />
                    <button 
                    className='btn'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;