import React from 'react';
import TabBar from '../../components/TabBar/TabBar';
import { Outlet, useParams } from 'react-router-dom';
import TabNavigation from '../../components/TabNavigation/TabNavigation';
import { EmployeeData } from '../../contexts/EmployeeData';
import { testEmployees } from '../../initialDatas';

const EmployeeView = () => {
    const {emplId} = useParams()
    console.log(emplId)
    const foundedEmpl = testEmployees.find(empl => empl.id === emplId)
    console.log(foundedEmpl)
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
                <EmployeeData.Provider value={foundedEmpl}>
                    <Outlet />
                </EmployeeData.Provider>
                
            </div>
        </>
    )
}

export default EmployeeView;