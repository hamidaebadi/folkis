import React from "react";

const TabBar = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="tab-bar">
            {children}
        </div>
    )
}

export default TabBar;