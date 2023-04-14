import React from "react";
import {ButtonType ,ButtonSize} from '../../types';

const Button = ({type, size, children}: {type: ButtonType, size:ButtonSize, children: React.ReactNode}) => {
    
    return(
        <button className={`btn-${type.toLowerCase()} btn-${size.toLowerCase()}`}>
            {children}
        </button>
    )
}

export default Button;