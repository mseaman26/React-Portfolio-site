import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'

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
        if(currentPage === 'contact'){
            return <Contact/>
        }
    }
    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Footer/>
        </div>
    )
}

export default Portfolio;