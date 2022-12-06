# React-Portfolio-site

  ## Description
This project is a portfolio site for me, Michael Seaman.  Using React.js, this site renders four pages.  The first is an "About" page which contains a brief bio about myself.  The second is a "Projects" page that shows six of my coding projects with links to the deployed versions and corresponding GitHib repositories.  The third is a page with a downloadable resume.  The fourth is a "Contact Me" page that allows the user to send me a message.  The user can use links in the nav bar at the top of the page to move between these four pages.  The overall site does not reload when the user does this.  

## Link to the Site:
https://mseaman26.github.io/React-Portfolio-site


 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents
  * [Technologies Used](#technologies-used)<br/>
  * [Notable Methods Used](#notable-methods-used)<br/>
  * [Code Snippets](#code-snippets)<br />
  * [Questions](#questions)<br />


  ## Technologies Used
  - React.js
  - React-dom
  - JavaScript
  - HTML/CSS

  ## Notable Methods Used
  - Rendering a single-page app with React using reusable components
  - Conditional rendering and the useState function
  - Passing properties from parent elements to child elements within React
  ## Code Snippets
Here we have the code for the project card, which is used repeatedly to display six different coding projects. I wanted each card to initially show a still image of each project, then when hovered with the cursor, switch to an animated gif and reveal two links associated with the project.  I used the "onMouseOver" and "onMouseOut" methods to to trigger handler functions to implement this logic.  
``` javascript
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
```
Here we have the overall layout of the page.  This is where we conditionally render the four pages of the site using the nav bar.
```javascript
function Portfolio() {
    const [currentPage, setCurrentPage]= useState('About')
    const renderPage = () => {
        if(currentPage === 'About'){
            return <About/>
        }
        if(currentPage === "Projects") {
            return <Projects/>
        }
        if(currentPage === 'Resume'){
            return <Resume/>
        }
        if(currentPage === 'Contact'){
            return <Contact/>
        }
    }
    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}
```

  ## Questions
I hope you've enjoyed learning about my portfolio site! If you have any questions about this project, feel free to reach out me at:<br>
  <a href="MSeaman26@gmail.com">MSeaman26@gmail.com</a><br/>


    



