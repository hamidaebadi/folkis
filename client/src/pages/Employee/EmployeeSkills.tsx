import React, {useContext} from 'react';
import InfoLabel from '../../components/Labels/InfoLabel';
import { EmployeeData } from '../../contexts/EmployeeData';
import { Education, Qualification } from '../../types';

const EmployeeSkills = () => {
    const employee = useContext(EmployeeData)
    return(
        <>
        <h4>Educations</h4>
        <div className='general-view-info'>
            {employee.educations.map((edu: Education) => (
                <InfoLabel key={edu.id} title={edu.title}>
                 {edu.institution_name}, {edu.graduation_year}
                </InfoLabel>
            ))}
        </div>

        <h4>Licenses and Qualifications</h4>
        <div className='general-view-info'>
            {employee.qualifications.map((qual: Qualification) => (
                <InfoLabel key={qual.id} title={qual.qualification_title}>
                 Expiry: {qual.month_expiration}.{qual.year_expiration}
                </InfoLabel>
            ))}
        </div>
        </>
    )
}

export default EmployeeSkills;