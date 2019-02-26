
import React from 'react';
import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="main_nav">
            <Link className="nav_items" to="/">Home</Link> 
            <Link className="nav_items" to="/Products">Products</Link> 
        </div>
    )
}

export default Navigation