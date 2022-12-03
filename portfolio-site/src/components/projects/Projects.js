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
        },
        {
            name: `...`,
            imageIndex: 2,
            alt: '...'
        },
        {
            name: `...`,
            imageIndex: 3,
            alt: '...'
        },
        {
            name: `...`,
            imageIndex: 4,
            alt: '...'
        },
        {
            name: `...`,
            imageIndex: 5,
            alt: '...'
        },

    ]



    return (
        <div className='portfolio_page'>
            <div className='portfolio_header'>
                <h1>
                Projects
                </h1>
            </div>
            <div className='projects_container'>
                <Project projects={projects}/>
            </div>
                
        </div>
       
    )
}
export default Projects