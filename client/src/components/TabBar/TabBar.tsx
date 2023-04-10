import React from "react";
import TabBarItem from "./TabBarItem";

const TabBar = ({tabs}: {tabs: {title: string, link: string}[]}) => {
    return (
        <div className="tab-bar">
            {tabs.map(tab => <TabBarItem 
                                key={tab.link} 
                                title={tab.title} 
                                link={tab.link}/>
                                )}
        </div>
    )
}

export default TabBar;