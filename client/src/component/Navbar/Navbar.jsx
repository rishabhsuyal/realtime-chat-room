import React from 'react';
import "./Navbar.css";
function Navbar() {
    return (
        <div className='nav-container'>
            <div><h1 className='heading'>DISCORD</h1></div>
            <div className='sub-nav-container'>
                <div><h1 className='heading'>SUPPORT</h1></div>
                <div><h1 className='heading'>BLOG</h1></div>
            </div>
            <div><h1 className='heading'>LOGIN</h1></div>
        </div>
    )
}

export default Navbar