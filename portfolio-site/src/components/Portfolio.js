import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import About from './Pages/About'
import Projects from './projects/Projects'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'

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

export default Portfolio;