import React from 'react';
import TabBar from '../../components/TabBar/TabBar';
import { Outlet } from 'react-router-dom';
import TabNavigation from '../../components/TabNavigation/TabNavigation';

const EmployeeView = () => {
    return(
        <>
            <TabBar>
                <div className='empl-view-header'>
                    <div className='prof-pic'>
                    </div>
                </div>
            </TabBar>
            <TabBar>
                <TabNavigation />
            </TabBar>
            <div className='empl-view-main'>
                <Outlet />
            </div>
        </>
    )
}

export default EmployeeView;