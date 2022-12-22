import React, { useState } from 'react';
import MikesWordleStill from '../../assets/images/wordleScreenshot.png'
import MikesWordleGif from '../../assets/images/MikesWordle.gif'
import soundsLikeStill from '../../assets/images/SoundsLikeStill.png'
import soundsLikeGif from '../../assets/images/SoundsLikeInYourAreaGif.gif'
import fetchStill from '../../assets/images/fetchStill.png'
import fetchGif from '../../assets/images/fetchGif.gif'
import techBlogStill from '../../assets/images/techBlogStill.png'
import techBlogGif from '../../assets/images/techBlogGif.gif'
import socialMediaStill from '../../assets/images/socialMediaStill.png'
import socialMediaGiff from '../../assets/images/socialMediaGif.gif'
import pokemonStill from '../../assets/images/Pokemon_Still.png'
import pokemonGif from '../../assets/images/pokemon_gif.gif'

const images =[MikesWordleStill, soundsLikeStill,fetchStill, techBlogStill, socialMediaStill, pokemonStill]
const gifs = [MikesWordleGif,soundsLikeGif, fetchGif, techBlogGif, socialMediaGiff, pokemonGif]




function Project(props) {
    //create a div element to put links into when project is hovered
    const linksDiv = document.createElement('div')
    //when hovered, fill the above element with innerHTML (the links)
    function imageHoverHandler(e){
        linksDiv.innerHTML = `<a class='project_link' href='${props.projects[e. target.id].link1}' target="_blank">${props.projects[e.target.id].link1Text}</a><br><a class='project_link' href='${props.projects[e.target.id].link2}' target="_blank">${props.projects[e.target.id].link2Text}</a>`
        
        //append the links to the card
        e.target.parentElement.appendChild(linksDiv)
        //the id of the target element happens to be an index I can use to display the gif from an array of gifs
        e.target.src = gifs[e.target.id] 
    }
    function imageUnHoverHandler(e){
        //initially display the corresponding image for each project, not the gif
        e.target.src = images[e.target.id]     
    }

    return(
        //map through the array and render the cards
        props.projects.map((project) => (
            <div className='project-card' >
                
                <div className='project_title'>
                    <h3 className='project_header'>
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