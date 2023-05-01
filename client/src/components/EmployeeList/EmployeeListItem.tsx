import React from 'react';
import { EmployeeData } from '../../types';
import { Link } from 'react-router-dom';

const EmployeeListItem = ({employee}:{employee: EmployeeData}) => {
    return(
        <Link to={`view/${employee.id}/general-info`}>
        <div className='employee-list-item'>
            <div>icon</div>
            <div>{employee.general_info.first_name}</div>
            <div>{employee.general_info.last_name}</div>
            <div>{employee.general_info.role}</div>
            <div>{employee.general_info.status}</div>
        </div>
        </Link>
    )
}

export default EmployeeListItem;