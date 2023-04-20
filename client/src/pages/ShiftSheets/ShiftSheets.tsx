import React from "react";
import {Outlet} from 'react-router-dom';

const ShiftSheets = () => {
    return(
        <div className="shift-page">
            
           <Outlet />
        </div>
    )
}

export default ShiftSheets;