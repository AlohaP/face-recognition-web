import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onBtnSubmit}) => {
    return(
        <div>
            <p className='f4'>
                {'This App will use magic to detect faces in pictures. Try it out! '}
            </p>
            <div className='center'>
              <div className='form center pa4 br3 shadow-2'>
                <input className='f4 pa2 w-70 center' type='tex' onChange = {onInputChange} />
                <button 
                className='w-30 grow f4 link ph3 pv2 dib grey bg-light-green' 
                onClick = {onBtnSubmit}
                >Detect</button>
              </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;