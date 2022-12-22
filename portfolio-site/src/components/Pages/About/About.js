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
                
                <p id='about_p'>
                I grew up in the beautiful redwood tree forests of Mt. Tamalpias in Marin County, CA.  I’ve had a wide range of interests throughout my life, including classical piano, electronic music, surfing, hiking, and of course, coding.  My real introduction to coding began while I was studying music at UC Santa Cruz.  My favorite music professor, David Cope, taught classes and summer workshops in algorithmic computer music, all of which I attended.  While applying my interest in music to the field of coding, I discovered an aptitude and an enthusiasm for the type of problem-solving that coding entails.  I love debugging and making things work! I did a few independent projects after college, but I really began to code seriously when I enrolled in the UC Berkeley Extension Full-Stack Web Development Coding Bootcamp.  It was thrilling to re-engage with this usage of my mind and to learn more current tools.  I’m ready for a career in web development and I am really excited to continue my learning!
                </p>
                
            </div>
                
            
        </div>
            
    )
}
export default About