import React from 'react'

import MemeText from './MemeText';

function MainInput(){
//one function to call other functions

    function handleClick() {
       const background = document.getElementById('#image-container');
      // background.style.backgroundImage =
    }

    return (
        <div className="row input-area">
            <div className="container">
            
                <MemeText label="Top Text" />          
                <MemeText label="Bottom Text" /> 

                
                </div>
            <div className="container">
                <button onClick={handleClick}>Get a new meme image</button>
            </div>
        </div>
    )
}

export default MainInput