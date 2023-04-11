import React from "react";

const TabBarButton = ({text}:{text: string}) => {
    return(
        <>
        <button className="tab-bar-btn">{text}</button>
        </>
    )
}

export default TabBarButton;