import React, { useState } from 'react';
import MikesWordleStill from '../../assets/images/wordleScreenshot.png'
import MikesWordleGif from '../../assets/images/MikesWordle.gif'
import soundsLikeStill from '../../assets/images/SoundsLikeStill.png'
import soundsLikeGif from '../../assets/images/SoundsLikeInYourAreaGif.gif'

const images =[MikesWordleStill, soundsLikeStill]
const gifs = [MikesWordleGif,soundsLikeGif]




function Project(props) {
    <div>
        <a href='http://www.google.com' class='project_link'></a>
    </div>
    const linksDiv = document.createElement('div')
    

    function imageHoverHandler(e){
        linksDiv.innerHTML = `<a class='project_link' href='${props.projects[e.target.id].link1}' target="_blank">${props.projects[e.target.id].link1Text}</a><br><br><a class='project_link' href='${props.projects[e.target.id].link2}' target="_blank">${props.projects[e.target.id].link2Text}</a>`
        e.target.parentElement.appendChild(linksDiv)
        e.target.src = gifs[e.target.id]
    }
    function imageUnHoverHandler(e){
        console.log(e.target)
        e.target.src = images[e.target.id]
    }

    return(
        props.projects.map((project) => (
            <div className='project-card' >
                <div className='project_title'>
                    <h3>
                        {project.name}
                    </h3>
                </div>
                <div className='project_image_div'>
                    <img id={project.imageIndex} src={images[project.imageIndex] } className='project_image' alt={project.alt} onMouseOver={imageHoverHandler} onMouseOut={imageUnHoverHandler}/>
                </div>                   
            </div>
        ))
)
}

export default Project