import React, { useState } from 'react';
import Project from './Project';


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
            name: `Fetch`,
            imageIndex: 2,
            alt: 'Image/gif of the Fetch Application',
            link1:`https://github.com/mseaman26/Fetch`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://fetch00.herokuapp.com/`,
            link2Text: `*Visit Deployed App`
        },
        {
            name: `Mike's Tech Blog`,
            imageIndex: 3,
            alt: `Image/Gif of the Mike's Tech Blog app`,
            link1: `https://github.com/mseaman26/Tech-Blog-Model-View-Controller`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://agile-cove-13175.herokuapp.com/`,
            link2Text: `*Visit Deployed App`
        },
        {
            name: `NoSQL Social Network Back-End API`,
            imageIndex: 4,
            alt: `Image/Gif of NoSQL Social Network Back-End API app`,
            link1: `https://github.com/mseaman26/NoSQL-Social-Network-API`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://www.youtube.com/watch?v=OrUoTL_nuFo`,
            link2Text: `* Watch a Demo of this back-end app`
        },
        {
            name: `SQL Employee Tracker`,
            imageIndex: 5,
            alt: 'Image/Gif of SQL Employee Tracker',
            link1: `https://github.com/mseaman26/SQL-Employee-Tracker`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2: `https://youtu.be/zLVQHoDLSqM`,
            link2Text: `* Watch a Demo of this command-line app`

        },

    ]



    return (
        <div className='portfolio_page'>
            <div className='portfolio_header'>
                <h1>
                Please Check out Some of my Coding Projects!
                </h1>
            </div>
            <div className='projects_container'>
                <Project projects={projects}/>
            </div>
                
        </div>
       
    )
}
export default Projects