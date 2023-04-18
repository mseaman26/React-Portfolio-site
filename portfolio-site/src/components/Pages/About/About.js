import React, { useState } from 'react';
import mikePic from '../../../assets/images/mike.png'
function About() {
    return(
        <div id='about_page'>
            <img src={mikePic} id='mikePic'></img>
            <div id='about_me'>
                
                <h1 id='about-header'>
                    About Michael Seaman
                    <br/>
                    <br/>
                   
                    * * *
                </h1>
                
                <p className='about_p'>
                I grew up in the beautiful redwood tree forests of Mt. Tamalpias in Marin County, CA.  I’ve had a wide range of interests throughout my life, including classical piano, electronic music, surfing, hiking, and of course, coding.  My real introduction to coding began while I was studying music at UC Santa Cruz.  My favorite music professor, David Cope, taught classes and summer workshops in algorithmic computer music, all of which I attended.  While applying my interest in music to the field of coding, I discovered an aptitude and an enthusiasm for the type of problem-solving that coding entails.  I love debugging and making things work! I did a few independent projects after college, but I really began to code seriously when I enrolled in the UC Berkeley Extension Full-Stack Web Development Coding Bootcamp.  It was thrilling to re-engage with this usage of my mind and to learn more current tools.  I've accepted a TA position with the bootcamp because I love engaging with the material and I love teaching it to others. I’m ready for a career in full-stack development and I am really excited to continue my learning! I am passionate about and proficient in the following skills:
                </p>
                <ul>
                    <li>
                        <p className='about_p'>
                            Front End Development
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            Back End Development
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            MERN
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            Javascript/ES6
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            HTML 5, CSS
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            Relational Databases: SQL, MySQL, MongoDB, Mongoose, GraphQL
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            Debugging, Problem-Solving
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            Communication
                        </p>
                    </li>
                    <li>
                        <p className='about_p'>
                            ...and Much More!
                        </p>
                    </li>
                </ul>
                
            </div>
                
            
        </div>
            
    )
}
export default About