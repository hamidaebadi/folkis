import React from 'react';
import {ButtonColor, ButtonSize} from '../../types';
import { Link } from 'react-router-dom';

const Button = ({color, size, asLink, path, children, ...props}: {
    color: ButtonColor, 
    size: ButtonSize,
    asLink?: boolean,
    path?: string,
    children: React.ReactNode,
    [x: string]: any
}) => {
    if(asLink){
        return(
            <Link className={`btn-${color.toLowerCase()} btn-${size.toLowerCase()}`} to={path}>
                {children}
            </Link>
        )
    }
    return(
        <button className={`btn-${color.toLowerCase()} btn-${size.toLowerCase()}`} {...props}>
            {children}
        </button>
    )
}

export default Button;