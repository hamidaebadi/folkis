import React from 'react';
import { EmployeeContactInfo } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import InfoLabel from '../Labels/InfoLabel';

const ContactDetailsCard = ({contactDetails} : {contactDetails:EmployeeContactInfo}) => {
    return(
        <div className='empl-contact-item'>
            <header>
                <FontAwesomeIcon icon={faAddressCard} size='2xl'/>
            </header>
            <section>
                <div>
                    <InfoLabel title='Primary Phone'>
                        {contactDetails.phone_main}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Secondry phone'>
                        {contactDetails.phone_secondary}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Email'>
                        {contactDetails.email}
                    </InfoLabel>
                </div>
            </section>
            <footer>
                <Button type='button' className='btn-primary-sm'>Edit</Button>
                <Button type='button' className='btn-danger-sm'>Remove</Button>
            </footer>
            
        </div>
    )
}

export default ContactDetailsCard;