# React-Portfolio-site

  ## Description
This project is a portfolio site for me, Michael Seaman.  Using React.js, this site has four pages.  The first is an "About" page which contains a brief bio about myself.  The second is a "Projects" page that shows six of my coding projects with links to the deployed versions and corresponding GitHib repositories.  The third is a page with a downloadable resume.  The fouth is a "Contact Me" page that allows the user to send me a message.  The user can use links in the nav bar at the top of the page to move between these four pages.  The overall site does not reload when the user does this.  

## Link to the Site:
https://mseaman26.github.io/React-Portfolio-site


 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents
  * [Technologies Used](#technologies-used)
  * [Code Snippets](#code-snippets)<br />
  * [Usage](#usage)<br />
  * [Contributing to This Repository](#how-to-contribute-to-this-repository)<br />
  * [Questions](#questions)<br />

  ## Overview of the application
<img src="./public/assets/Overview.gif">

  ## Technologies Used
  - React.js
  - JavaScript
  - HTML/CSS

  ## Notable Methods Used
  - Rendering a single-page app with React using reusable components
  - Conditional rendering and the useState function
  - Passing properties from parent elements to child elements with React
  ## Code Snippets
``` javascript
function Project(props) {
    <div>
        <a href='http://www.google.com' class='project_link'></a>
    </div>
    const linksDiv = document.createElement('div')
    

    function imageHoverHandler(e){
        linksDiv.innerHTML = `<a class='project_link' href='${props.projects[e. target.id].link1}' target="_blank">${props.projects[e.target.id].link1Text}</a><br><a class='project_link' href='${props.projects[e.target.id].link2}' target="_blank">${props.projects[e.target.id].link2Text}</a>`
        
        e.target.parentElement.appendChild(linksDiv)
        e.target.src = gifs[e.target.id] 
    }
    function imageUnHoverHandler(e){
        e.target.src = images[e.target.id]     
    }

    return(
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
```

  ## Usage

This is an open-source project.  Feel free to clone down the repository at: <br>
<a href = "https://github.com/mseaman26/NoSQL-Social-Network-API">https://github.com/mseaman26/NoSQL-Social-Network-API</a><br>
After doing so, navigate in your terminal to the root folder of the project and run "npm i." Activate the server by running "npm run watch" to get nodemon running.  Begin testing routes in Insomnia
  ## Questions
If you have any questions about this project, feel free to reach out me at:<br>
  <a href="MSeaman26@gmail.com">MSeaman26@gmail.com</a><br/>


    


