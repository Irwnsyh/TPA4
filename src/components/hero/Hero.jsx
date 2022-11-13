import React from 'react'
import './HeroStyles.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h1> <span>Irwan</span>syah</h1>
                    <h3>Desain UI/UX and <span>Front-End Developer</span></h3>
                    <img src={"images/profil.JPG"} alt="profil" className="profil"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
