import React from "react";
import { Link } from 'react-router-dom';

const Item = ({title}:{title: string}) => {
    return(
        <div className="side-list-item">
            <Link to={title.toLowerCase()}>{title}</Link>
        </div>
    )
}

export default Item;