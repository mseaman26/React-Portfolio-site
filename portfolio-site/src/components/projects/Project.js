import React, { useState } from 'react';
import MikesWordleStill from '../../assets/images/wordleScreenshot.png'
import MikesWordleGif from '../../assets/images/MikesWordle.gif'

const images =[MikesWordleStill]
const gifs = [MikesWordleGif]




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
        
        <div className='project-card' >
            {props.projects.map((project) => (
                <img id={project.imageIndex} src={images[props.projects.imageIndex] } className='project_image' alt={props.projects.alt} onMouseOver={hoverHandler} onMouseOut={unHoverHandler}/>
            ))}
           
        </div>
    )
}

export default Project