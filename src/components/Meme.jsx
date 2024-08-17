import React, {useState} from 'react'
import memesData from '../memesData.js';

function Meme() {
/**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    const [meme, setMeme] = useState({topText:'', bottomText:'',randomImage:'http://i.imgflip.com/1bij.jpg'});

   const [allMemeImages,setMemeImages] = useState(memesData);
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getMemeImage() {        
        const memeData = allMemeImages.data.memes;
        const dataLength = Object.keys(memeData).length ;
        const number = getRandomInt(dataLength);

       setMeme((prevMeme => ({ ...prevMeme, randomImage: memeData[number].url })))
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
            <button className = "form-button" onClick={getMemeImage} >Get a new meme image 🖼</button>
        </div>
        <img src = {meme.randomImage}  className="image--meme" />
       
        </main>
        
    )


}

export default Meme