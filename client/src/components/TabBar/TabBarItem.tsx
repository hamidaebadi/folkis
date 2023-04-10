import React from "react";
import { Link } from 'react-router-dom';

const TabBarItem = ({title, link}: {title: string, link: string}) => {
    return (
        <div className="tab-bar-item">
            <Link to={link}>{title}</Link>
        </div>
    )
}

export default TabBarItem;