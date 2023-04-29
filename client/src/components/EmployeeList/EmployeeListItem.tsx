import React from 'react';
import { EmployeeData } from '../../types';
import { Link } from 'react-router-dom';

const EmployeeListItem = ({employee}:{employee: EmployeeData}) => {
    return(
        <Link to={`view/${employee.id}/basic-info`}>
        <div className='employee-list-item'>
            <div>icon</div>
            <div>{employee.basic_info.first_name}</div>
            <div>{employee.basic_info.last_name}</div>
            <div>{employee.basic_info.role}</div>
            <div>{employee.basic_info.status}</div>
        </div>
        </Link>
    )
}

export default EmployeeListItem;