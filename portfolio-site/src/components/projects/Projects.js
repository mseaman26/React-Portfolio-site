import React, { useState } from 'react';
import Project from './Project';
import MikesWordle from '../../assets/images/MikesWordle.gif'


function Projects() {
    const projects = [
        {
            name: `Mike's Wordle`,
            imageIndex: 0,
            alt: 'image of Mikes wordle game'
        },
        {
            name: `Sounds Like All Over The World`,
            imageIndex: 1,
            alt: 'image of Sounds like All Over The World app'
        }
    ]



    return (
        <div className='portfolio-page' id='projects-page'>
             <h1>
            Projects
            </h1>
            
            <Project projects={projects}/>
        </div>
       
    )
}
export default Projects