import React from "react";
import { Link } from 'react-router-dom';

const Item = ({title, link}:{title: string, link: string}) => {
    return(
        <div className="side-list-item">
            <Link to={link}>{title}</Link>
        </div>
    )
}

export default Item;