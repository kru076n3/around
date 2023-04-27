import React from "react";

function Beginner(){
    return (
    <div>
        <h1>Beginner</h1>
        <img src={`${process.env.PUBLIC_URL}/images/here.png`}/>
    </div>
  );
}

export default Beginner;