import React from 'react';
import { Address } from '../../types';
import InfoLabel from '../Labels/InfoLabel';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const AddressDetailsCard = ({addressDetails}: {addressDetails: Address}) => {
    return(
        <div className='empl-address-card'>
            <header>
                <FontAwesomeIcon icon={faAddressCard} size='2xl'/>
            </header>
            <section>
            <div>
                    <InfoLabel title='1. Street'>
                        {addressDetails.street}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='2. Street'>
                        {addressDetails.street_secondary}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Postal Code'>
                        {addressDetails.postal_code}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='City'>
                        {addressDetails.city}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Country'>
                        {addressDetails.country}
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

export default AddressDetailsCard;