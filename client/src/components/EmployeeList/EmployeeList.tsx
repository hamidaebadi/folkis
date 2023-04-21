import React from 'react';
import { EmployeeData } from '../../types';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({employees}:{employees: EmployeeData[]}) => {
    return(
        <div className='employees-list'>
            {employees.map(empl => <EmployeeListItem key={empl.id} employee={empl}/>)}
        </div>
    )
}

export default EmployeeList;