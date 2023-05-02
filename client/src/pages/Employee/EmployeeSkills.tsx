import React, {useContext} from 'react';
import { EmployeeData } from '../../contexts/EmployeeData';
import { Education, Qualification } from '../../types';
import EducationItemCard from '../../components/Cards/EducationItemCard';
import CertificateCard from '../../components/Cards/CertificateCard';

const EmployeeSkills = () => {
    const employee = useContext(EmployeeData)
    return(
        <>
        <h4>Educations</h4>
        <div className='empl-education-page'>
            {employee.educations.map((edu: Education) => (
                <EducationItemCard key={edu.id} educationItem={edu}/>
            ))}
        </div>

        <h4>Licenses and Qualifications</h4>
        <div className='empl-education-page'>
            {employee.qualifications.map((qual: Qualification) => (
                <CertificateCard key={qual.id} license={qual}/>
            ))}
        </div>
        </>
    )
}

export default EmployeeSkills;