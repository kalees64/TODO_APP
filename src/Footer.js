import React from "react";
import './App.css';

const Footer = ({length})=>{
    // const date = new Date();

    

    
    return(
        <footer className="footer">
            <p className="footer-content">Total Tasks : {length} </p>
        </footer>
    )
}

export default Footer