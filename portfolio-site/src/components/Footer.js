import React, { useState } from 'react';
function Footer(){
    return(
        <div className='nav-links'>
            <a href='https://github.com/mseaman26' target={"blank"} className='nav_link' >
                <p>Visit my GitHub Page</p>
            </a>
            <a href='https://www.linkedin.com/in/michael-seaman-120a59250/' target={"blank"} className='nav_link'>
                <p>Visit my LinkedIn</p>
            </a>
            <a href='https://medium.com/@mseaman26' target={"blank"} className='nav_link'>
                <p>View my Medium Blog posts</p>
            </a>
            
        </div>
    )
}
export default Footer