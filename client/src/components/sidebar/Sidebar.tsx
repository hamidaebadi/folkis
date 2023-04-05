import React from "react";
import SidebarFooter from "./SidebarFooter";
import ItemList from "./ItemList";

const Sidebar = () => {
    return(
        <div className="sidebar">
        <ItemList />
        <SidebarFooter />
        </div>
    )
}

export default Sidebar