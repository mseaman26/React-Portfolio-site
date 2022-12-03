import React, { useState } from 'react';
import MikesWordleStill from '../../assets/images/wordleScreenshot.png'
import MikesWordleGif from '../../assets/images/MikesWordle.gif'
import soundsLikeStill from '../../assets/images/SoundsLikeStill.png'
import soundsLikeGif from '../../assets/images/SoundsLikeInYourAreaGif.gif'

const images =[MikesWordleStill, soundsLikeStill]
const gifs = [MikesWordleGif,soundsLikeGif]




function Project(props) {
    function hoverHandler(e){
        console.log(e.target)
        e.target.src = gifs[e.target.id]
    }
    function unHoverHandler(e){
        console.log(e.target)
        e.target.src = images[e.target.id]
    }
    return(
        
        
            props.projects.map((project) => (
                <div className='project-card' >
                <img id={project.imageIndex} src={images[project.imageIndex] } className='project_image' alt={project.alt} onMouseOver={hoverHandler} onMouseOut={unHoverHandler}/>
                </div>
            ))
           
        
    )
}

export default Project