import React from "react";
import { Link } from "react-router-dom";

function Home(){

    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/second">
                <button data-testid="button-1">Go to second page</button>
            </Link>
        </div>
    );
}

export default Home;