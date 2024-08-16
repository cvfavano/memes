import React from "react";
import { useState } from "react";
import Data from './memesData.js';

function MemeText(props) {
    const [value, setValue] = useState("");
    
    
    function handleChange(e) {
        
    }

    return (
    <div className="meme-container">
    <label>{props.label} <br/>
    <input 
        type="text"
        value={value} 
        onChange={handleChange}
    />
    </label>
    </div>
    )

}

export default MemeText