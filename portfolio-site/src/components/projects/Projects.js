import React, { useState } from 'react';
import Project from './Project';


function Projects() {
    const projects = [
        {
            name: `Pokedex Tracker`,
            description: `A Place to keep track of all the Pokemon you've caught!  Features: React.js, JavaScript, HTML/CSS`,
            imageIndex: 0,
            alt: 'image of pokedex tracker', 
            link1: `https://github.com/AJManzione/Pokemon-Trading-Center`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2: `https://pokemon-app.herokuapp.com/`,
            link2Text: '*Visit Deployed App'
        },
        {
            name: `Mike's Wordle`,
            description: `A remake of the NYT Wordel Game! Feel free to visit and solve the daily word!  Features: JavaScript, JQery, HTML/CSS`,
            imageIndex: 1,
            alt: 'image of Mikes wordle game', 
            link1: `https://github.com/mseaman26/Mike-s-Wordle`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2: `https://mseaman26.github.io/Mike-s-Wordle/`,
            link2Text: '*Visit Deployed App'
        },
        {
            name: `Fetch`,
            description: `An app for rating the Cuteness of dogs. Features: JavaScript, Web APIs, Express, MySQL, user authentication, Handlebars`,
            imageIndex: 2,
            alt: 'Image/gif of the Fetch Application',
            link1:`https://github.com/mseaman26/Fetch`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://fetchdograter.herokuapp.com/`,
            link2Text: `*Visit Deployed App`
        },
        {
            name: `Sounds Like All Over The World`,
            description: `An app for finding concerts and other events in your area. Features: Fetch/Web API, Bulma, JS, HTML/CSS`,
            imageIndex: 3,
            alt: 'image of Sounds like All Over The World app',
            link1:`https://github.com/mattjgatsby/artist-event-and-rec`,
            link1Text:`<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://mattjgatsby.github.io/artist-event-and-rec/`,
            link2Text: `*Visit Deployed App`
        },
     
        {
            name: `Mike's Tech Blog`,
            description: `A Functioning Blog Website. Features: User authentication, persistent data and relational tables with sequelize, Express.js`,
            imageIndex: 4,
            alt: `Image/Gif of the Mike's Tech Blog app`,
            link1: `https://github.com/mseaman26/Tech-Blog-Model-View-Controller`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://agile-cove-13175.herokuapp.com/`,
            link2Text: `*Visit Deployed App`
        },
        {
            name: `NoSQL Social Network Back-End API`,
            description: `A back-end for a social media site. Features: MongoDB, Mongoose, Insomnia`,
            imageIndex: 5,
            alt: `Image/Gif of NoSQL Social Network Back-End API app`,
            link1: `https://github.com/mseaman26/NoSQL-Social-Network-API`,
            link1Text: `<i style="font-size:24px" class="fa">&#xf09b;</i> GitHub Repo Link`,
            link2:`https://www.youtube.com/watch?v=OrUoTL_nuFo`,
            link2Text: `* Watch a Demo of this back-end app`
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