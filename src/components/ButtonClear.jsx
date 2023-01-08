
import React from "react";
import '../styles/buttonclear.css';

const ButtonClear = (props) => {
   return(
    <div className="button-clear" onClick={props.clickC}>
    {props.children}
</div>
   )
};

export default ButtonClear;