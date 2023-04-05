import React from "react";

const Item = ({title}:{title: string}) => {
    return(
        <div className="side-list-item">
            {title}
        </div>
    )
}

export default Item;