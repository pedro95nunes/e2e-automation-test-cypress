import React from "react";
import { Link } from "react-router-dom";

function SecondPage(){

    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/">
                <button data-testid="button-2">Go to home page</button>
            </Link>
        </div>
    );
}

export default SecondPage;