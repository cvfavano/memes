import React from "react";
import { useState } from "react";


function MemeText(props) {
    const [value, setValue] = useState("");
    
    function handleChange(e) {
        setValue(e.target.value);
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