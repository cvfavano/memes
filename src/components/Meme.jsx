import React, {useState} from 'react'
import memesData from '../memesData.js';

function Meme() {
      const [image, setImage] = useState('');
     let currentImage ='';
    function handleClick() {
     
      

       function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const data = memesData.data.memes;

        const dataLength = Object.keys(data).length 
        
        const imageNumber = getRandomInt(dataLength);
        
        console.log(data[imageNumber].url)
        setImage(data[imageNumber].url);

    }
        
    

    
    return (
        <main>
           
        <div className = 'form'>
            <label>Top Text<br/>
            <input 
                type="text" 
                placeholder="Top Text"
                className="form-input"
            />
            </label>
            <label> Bottom Text<br/>
            <input 
                type="text" 
                placeholder="Bottom Text"
                className="form-input"
            />
            </label>
            <button className = "form-button" onClick={handleClick} >Get a new meme image 🖼</button>
        </div>
        <img src = {image }width="100%" />
       
        </main>
        
    )


}

export default Meme