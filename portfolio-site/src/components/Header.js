import React, { useState } from 'react';

function Header({ currentPage, handlePageChange}) {

    return(
        <div className='nav-links'>
           
                <a 
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav_link_active' : 'nav_link'}
                    >
                    About   
                </a>
        
          
                <a
                    href='#projects'
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ?
                     'nav_link_active' : 'nav_link'}
                    >
                    Projects
                </a>
     
        
                <a
                    href='#resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav_link_active' : 'nav_link'}
                    >
                    Resume
                </a>
         
       
                <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav_link_active' : 'nav_link'}
                    >
                    Contact
                </a>
      
        </div>
    )
}

export default Header