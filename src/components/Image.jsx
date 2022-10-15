import React from 'react';
import image from "./background.jpeg";

function Component(){
    return (
        <div id="background" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat" }}>
        </div>
      );
    }



export default Image