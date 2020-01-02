import React from "react";

function Nav(props){
    return(

        <div className="navbar-fixed">
            <nav className= "navbar">
                <ul>
                    <li className= "brand">
                       
                        <a href="/" > Google Books </a>
                    </li>
                    <li className= "search">
                       
                        <a href="/search">Search </a>
                    </li>
                    <li className= "score">
                        
                        <a href="/saved">Save </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;