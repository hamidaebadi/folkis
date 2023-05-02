import React from 'react';
import { Qualification } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import InfoLabel from '../Labels/InfoLabel';
import Button from '../Button/Button';

const CertificateCard = ({license}:{license: Qualification}) => {
    return(
        <div className='license-item-card'>
            <header>
                <FontAwesomeIcon icon={faCertificate} size='2xl'/>
            </header>
            <section>
                <div>
                    <InfoLabel title='Certificate Title'>
                        {license.qualification_title}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Expiry'>
                        {license.month_expiration}.{license.year_expiration}
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

export default CertificateCard;