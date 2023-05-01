import React, {useContext} from 'react';
import InfoLabel from '../../components/Labels/InfoLabel';
import { EmployeeData } from '../../contexts/EmployeeData';
import Button from '../../components/Button/Button';

const EmployeeContactInfo = () => {
    const employee = useContext(EmployeeData)
    return(
        <>
            <h4>Contact Details</h4>
            <div className='general-info-view'>
                <InfoLabel title='Phone'>
                    {employee.contact_info.phone_main}
                </InfoLabel>
                <InfoLabel title='Phone'>
                    {employee.contact_info.phone_secondry}
                </InfoLabel>
                <InfoLabel title='Email'>
                    {employee.contact_info.email}
                </InfoLabel>            
            </div>
            <hr />
            <h4>Address Details</h4>
            <div className='general-info-view'>
                <InfoLabel title='Street'>
                    {employee.contact_info.address.street}
                </InfoLabel>
                <InfoLabel title='2.Street(optional)'>
                    {employee.contact_info.address.street_secondry }
                </InfoLabel>
                <InfoLabel title='Postal Code'>
                    {employee.contact_info.address.postal_code }
                </InfoLabel>
                <InfoLabel title='City'>
                    {employee.contact_info.address.city }
                </InfoLabel>
                <InfoLabel title='Country'>
                    {employee.contact_info.address.country }
                </InfoLabel>
            </div>
            <div className='general-info-view'>
                <Button type='button' className='btn-primary-sm'>Edit</Button>
            </div>
        </>
    )
}

export default EmployeeContactInfo;