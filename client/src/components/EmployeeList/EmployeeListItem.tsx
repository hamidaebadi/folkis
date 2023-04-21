import React from 'react';
import { EmployeeData } from '../../types';
import { Link } from 'react-router-dom';

const EmployeeListItem = ({employee}:{employee: EmployeeData}) => {
    return(
        <Link to='somepath'>
        <div className='employee-list-item'>
            <div>icon</div>
            <div>{employee.firstName}</div>
            <div>{employee.lastName}</div>
            <div>{employee.role}</div>
            <div>{employee.state}</div>
        </div>
        </Link>
    )
}

export default EmployeeListItem;