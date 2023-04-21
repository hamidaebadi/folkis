import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({title, link}:{title: string, link: string}) => {
    return(
        <NavLink to={link} className={({isActive}) => isActive ? 'side-link-active': 'side-link'}>{title}</NavLink>
        
    )
}

export default Item;