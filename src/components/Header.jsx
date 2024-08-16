import React from 'react'
import Logo from '../assets/logo.png'

function Header(){
//can this be split in to a funtion

   



    return (
         <header className="header">
            <img className="header--image" src={Logo} />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course = Project 3</h4>
         </header>
    )
}

export default Header