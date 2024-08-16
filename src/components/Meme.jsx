import React from 'react'

function Meme() {
    return (
        <main>
            <div className="container">
        <form>
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
            <button>Get a mew meme image 🖼</button>
        </form>
        </div>
        </main>
        
    )


}

export default Meme