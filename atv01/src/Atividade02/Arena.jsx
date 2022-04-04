import React, { Component } from "react";
import Hero from "./Hero";

const Arena = (props) =>
    <div>
        <h2>A Arena Escolhida foi:</h2> <h3>{props.Arena}</h3>
         {
            React.Children.map(props.children , Hero => {
                return React.cloneElement(Hero,  {...props})
            })
        }
    </div>




export default Arena    