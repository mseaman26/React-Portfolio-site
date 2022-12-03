import React, { useState } from 'react';
import Project from './Project';


function Projects() {
    const projects = [
        {
            id: 1,
            name: `Mike's Wordle`,
            image: `wordle-screenshot.png`,
            video: `Mike's Wordle!`

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