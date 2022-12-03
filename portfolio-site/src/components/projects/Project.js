import React, { useState } from 'react';
import MikesWordleStill from '../../assets/images/wordleScreenshot.png'
import MikesWordleGif from '../../assets/images/MikesWordle.gif'

const images =[MikesWordleStill]
const gifs = [MikesWordleGif]




function Project(props) {
    function hoverHandler(e){
        console.log(e.target)
        e.target.src = MikesWordleGif
    }
    function unHoverHandler(e){
        console.log(e.target)
        e.target.src = MikesWordleStill
    }
    return(
        <div className='project-card' >
            {
                <img src={MikesWordleStill} className='project_image' alt='gif of wordle game' onMouseOver={hoverHandler} onMouseOut={unHoverHandler}/>
            }
        </div>
    )
}

export default Project