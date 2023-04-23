import React from 'react';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Item = ({title, link, icon}:{title: string, link: string, icon?:IconProp}) => {
    return(
        <NavLink to={link} 
        className={({isActive}) => isActive ? 'side-link-active': 'side-link'}>
        <div><FontAwesomeIcon icon={icon}/> {title}</div></NavLink>
        
    )
}

export default Item;