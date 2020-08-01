import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="flex flex-column">
            <p className='f3 content ma3'>
            This Magic Brain will detect faces in your pictures
            <br/>Copy & Paste the image link below.
            <br/>Give it a try.
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