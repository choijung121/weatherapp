import React from "react"; 

import './page.css'

function Page(){
    return(
        <div id="project">
            <h1 className="project-title">Weather Search</h1>
            <input type="text"></input>
            <button className="btn btn-primary mt-2" >
            Search
          </button>
        </div>
    );
};

export default Page; 
