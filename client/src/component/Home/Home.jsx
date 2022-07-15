import React from 'react';
import back from "../../background.jpg"
import "./Home.css";
import Navbar from "../Navbar/Navbar"

function Home() {
    return (
        <div>
            <img className='image' src={back} />
            <Navbar/>
            <div className='container'>
            <button className='button-85'><h1>JOIN ROOM</h1></button>
                <button className='button-85'><h1>CREATE ROOM</h1></button>
            </div>
                
        </div>
    )
}

export default Home