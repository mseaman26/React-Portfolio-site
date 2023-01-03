import React, { useState } from 'react';
import resume from '../../assets/images/Michael_Seaman2.png'
import resume2 from '../../assets/images/Michael_Seaman1.png'

function Resume() {
    return(
        <div id='resume_page'>
            <h1 id='resume_header'>
                If you'd like to download my resume, simply click on it!
            </h1>
            
                <div id='resume_div'>
                    <a href={resume} download id='resume_a'>
                    <img className='resume_pic' src={resume2} alt='Resume for Mike Seaman'/>
                    <img className='resume_pic' src={resume} alt='Resume for Mike Seaman'/>
                    </a>
                </div>
            
        </div>
     
    )
}
export default Resume