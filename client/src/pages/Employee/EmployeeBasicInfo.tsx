import React from 'react';
import { EmployeeBasicInfo } from '../../types';
import { useContext } from 'react';
import { EmployeeData } from '../../contexts/EmployeeData';

const EmployeeBasicInfo = () => {
    const employee = useContext(EmployeeData)
    if (!employee){
        return(
            <div>
                Error, Employee &apos; data now found
            </div>
        )
    }
    
    return(
        <>
        <p>{employee.basic_info.first_name}</p>
        </>
    )
}

export default EmployeeBasicInfo;