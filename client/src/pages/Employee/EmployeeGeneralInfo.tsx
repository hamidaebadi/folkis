import React from 'react';
import { useContext } from 'react';
import { EmployeeData } from '../../contexts/EmployeeData';
import Button from '../../components/Button/Button';
import InfoLabel from '../../components/Labels/InfoLabel';

const EmployeeGeneralInfo = () => {
    const employee = useContext(EmployeeData)
    if (!employee){
        return(
            <div>
                Error, Employee &apos; data not found
            </div>
        )
    }
    
    return(
        <>
        <h3>General Information</h3>
        <div className='general-info-view'>
            <InfoLabel title='Full Name'>
                {employee.general_info.first_name} {employee.general_info.last_name}
            </InfoLabel>
            <InfoLabel title='Employment Date'>
                {employee.general_info.employment_date.getDate()}.
                {employee.general_info.employment_date.getMonth()+1}.
                {employee.general_info.employment_date.getFullYear()}
            </InfoLabel>
            <InfoLabel title='Birthday'>
                {employee.general_info.birthday.getDate()}.
                {employee.general_info.birthday.getMonth()}.
                {employee.general_info.birthday.getFullYear()}
            </InfoLabel>
            <InfoLabel title='Department'>
                {employee.general_info.department}
            </InfoLabel>
            <InfoLabel title='Job Title'>
                {employee.general_info.role}
            </InfoLabel>
            <InfoLabel title='Personnel Code'>
                {employee.general_info.personnel_code}
            </InfoLabel>
            <InfoLabel title='Base Salary'>
                {employee.general_info.base_salary} &euro; per hour
            </InfoLabel>
        </div>
        <div>
            <Button type='button' className='btn-primary-sm'>Edit</Button>
        </div> 
        </>
    )
}

export default EmployeeGeneralInfo;