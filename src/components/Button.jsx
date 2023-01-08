// Hook
import React from 'react';
import '../styles/button.css';


// Function
function Button(props){

    // Confirmar es Operador
    const isOperator = valor =>{
        return isNaN (valor) && (valor !== '.') && (valor !== '=');
    }

    return(
        <button className={
            `button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={()=> props.clickB(props.children)}>
                {props.children}
        </button>
    );
};

export default Button;