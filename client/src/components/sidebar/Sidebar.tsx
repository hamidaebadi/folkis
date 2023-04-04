import React from "react";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
    return(
        <div className="sidebar">
        <ul>
            <li>Dashboard</li>
            <li>Workers</li>
            <li>Shift sheet</li>
        </ul>
        <SidebarFooter />
        </div>
    )
}

export default Sidebar