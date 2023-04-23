import React from 'react';
import {ButtonColor, ButtonSize} from '../../types';
import { Link } from 'react-router-dom';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({asLink, path, children, icon,...props}: {
    asLink?: boolean,
    path?: string,
    children: React.ReactNode,
    icon?: IconProp,
    [x: string]: any
}) => {
    if(asLink){
        return(
            <Link to={path}>
                {children}
            </Link>
        )
    }
    return(
        <>
        <button role='button' {...props}>
            {icon && <FontAwesomeIcon icon={icon}/>} {children}
        </button>
        </>
        
    )
}

export default Button;