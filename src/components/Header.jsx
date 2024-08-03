import React from 'react'
import Logo from '../assets/logo.png'

function Header(){
//can this be split in to a funtion





    return (
        <div className="row nav">
            <div className="container">
                <div className="logo">
                    <img src={Logo} /> 
                    <p>Meme Generator</p>
                </div>
                <p className="project-name">React Course Project 3</p>
            </div>
        </div>
    )
}

export default Header