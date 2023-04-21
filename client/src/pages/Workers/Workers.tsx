import React from 'react';
import {Outlet} from 'react-router-dom';

const Workers = () => {
    return(
        <div className="workers-page">
            <Outlet />
        </div>
    )
}

export default Workers;