import React from 'react';
import { NavLink } from 'react-router-dom';

const TabBarItem = ({title, link}: {title: string, link: string}) => {
    return (
        <NavLink to={link} className={({isActive}) => isActive ? 'TabBarLink-active': 'TabBarLink'}>{title}</NavLink>
    )
}

export default TabBarItem;