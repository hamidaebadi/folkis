import React from "react";
import SidebarFooter from "./SidebarFooter";
import ItemList from "./ItemList";
import ProfileCard from "../ProfileCard/ProfileCard";

const Sidebar = () => {
    return(
        <div className="sidebar">
        <ProfileCard />
        <ItemList />
        <SidebarFooter />
        </div>
    )
}

export default Sidebar