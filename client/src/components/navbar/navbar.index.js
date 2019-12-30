import React from "react";

function Nav(props){
    return(

        <div className="navbar-fixed">
            <nav className= "navbar">
                <ul>
                    <li className= "brand">
                        {/* the a tag and href gives the sections their own space */}
                        <a href="/" > Google Books </a>
                    </li>
                    <li className= "search">
                        {/* status updates will be displayed here */}
                        <a href="/">Search </a>
                    </li>
                    <li className= "score">
                        {/* score will be displayed here */}
                        <a href="/save">Save </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;