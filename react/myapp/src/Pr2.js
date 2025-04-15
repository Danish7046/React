import React from "react";

const Example=(props)=>{
    return (
       <div>
          <h1 style={{textAlign:"center",color:"ActiveBorder",fontSize:"50px",fontFamily:"poppins"}}>{props.Name}:{props.Price}</h1>
       </div>
    );
}

export default Example;