import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light-pink py-3 sticky-top">
        <div className="container-fluid">
            <ul className='navbar-nav'>
                <li className='nav-item me-5 ms-5'>
                    <a className="navbar-brand Heading" href="#">
                    <a to="/">
                        <img  height="20px"></img>
                    </a>
                        
                    </a>
                </li>
                <li className='nav-item me-3'>
                    <a to="/" className='nav-link active'>
                        <i class="bi bi-house-fill fs-4"></i>
                    </a>
                   
                </li>
            </ul>
            <form className="d-flex input-group" role="search">
                <input className="form-control col-auto" type="search" placeholder="Ask Question Here" aria-label="Recipient's username" aria-describedby="button-addon3"/>
                <a className="btn btn-light btn-outline-secondary" type="button" id="button-addon3" to="/result">Search</a>
            </form>
            <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navMenu" 
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-3 collapse navbar-collapse justify-content-end" id="#navMenu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a to="/aboutus" className='nav-link active'>
                            About Us
                        </a>
    
                    </li>
                    <li className="nav-item">
                        <a to="/loginform" className="nav-link active">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a to="/signinform" className="nav-link active">Sign In</a>
                    </li>
                </ul>
            </div>
         </div>
    </nav>
    </>
  )
}

export default Navbar