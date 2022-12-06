import React, { useState } from 'react';
import resume from '../../assets/images/resume.png'

function Resume() {
    return(
        <div id='resume_page'>
            <h1 id='resume_header'>
                If you'd like to download my resume, simply click on it!
            </h1>
            <a href={resume} download>
                <div id='resume_div'>
                    
                    <img id='resume_pic' src={resume} alt='Resume for Mike Seaman'/>
                    
                </div>
            </a>
        </div>
     
    )
}
export default Resume