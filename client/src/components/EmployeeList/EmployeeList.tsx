import React from 'react';
import { EmployeeData } from '../../types';
import EmployeeListItem from './EmployeeListItem';

const EmployeeList = ({employees}:{employees: EmployeeData[]}) => {
    return(
        <div className='employee-list'>
            <section className='employee-list-headers'>
                <div>Profile Picture</div>
                <div>First Name</div>
                <div>Last Name</div>
                <div>Role</div>
                <div>State</div>
            </section>
            {employees.map((empl) => <div key={empl.id} ><EmployeeListItem employee={empl} /></div>)}
        </div>
    )
}

export default EmployeeList;