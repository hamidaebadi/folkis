import React, { useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import InlineSearchBox from '../../components/Forms/InlineSearchBox';
import { EmployeeData } from '../../types';
import { initialEmployees } from '../../initialDatas';

const WorkersList = () => {
    const [searchWord, setSearchWord] = useState<string>('')
    const [employeeList, setEmployeeList] = useState<EmployeeData[] | null>(initialEmployees)

    return(
        <>
            <TabBar>
               <InlineSearchBox />
            </TabBar>
            <div className='workers-list-view'>
            {!employeeList ? <div>Ei yhtään työntekijöitä</div>
            :employeeList.map((emp) => <div key={emp.id}>{emp.firstName + emp.lastName}</div>)
            }
        </div>
        </>
        
    )
}

export default WorkersList;