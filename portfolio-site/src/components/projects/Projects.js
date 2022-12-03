import React, { useState } from 'react';
import Project from './Project';
import MikesWordle from '../../assets/images/MikesWordle.gif'


function Projects() {
    const projects = [
        {
            name: `Mike's Wordle`,
            imageIndex: 0,
            alt: 'image of Mikes wordle game', 
            link1: `https://github.com/mseaman26/Mike-s-Wordle`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2: `https://mseaman26.github.io/Mike-s-Wordle/`,
            link2Text: '*Visit Deployed App'
        },
        {
            name: `Sounds Like All Over The World`,
            imageIndex: 1,
            alt: 'image of Sounds like All Over The World app',
            link1:`https://github.com/mattjgatsby/artist-event-and-rec`,
            link1Text:`<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://mattjgatsby.github.io/artist-event-and-rec/`,
            link2Text: `*Visit Deployed App`
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