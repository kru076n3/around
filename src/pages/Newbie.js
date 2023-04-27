import React from "react";

function Newbie(){
    return (
        <div>
            <h1>Newbie</h1>
            <img src={`${process.env.PUBLIC_URL}/images/here.png`}/>
        </div>
      );
}

export default Newbie;