import React from 'react';
import { Education } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import InfoLabel from '../Labels/InfoLabel';

const EducationItemCard = ({educationItem} : {educationItem: Education}) => {
    return(
        <div className='education-item-card'>
            <header>
            <FontAwesomeIcon icon={faBuildingColumns} size='2xl'/>
            </header>
            <section>
                <div>
                    <InfoLabel title='Degree'>
                    {educationItem.title}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Institution'>
                    {educationItem.institution_name}
                    </InfoLabel>
                </div>
                <div>
                    <InfoLabel title='Period'>
                    {educationItem.start.getMonth()}.{educationItem.start.getFullYear()} - {educationItem.end.getMonth()}.{educationItem.end.getFullYear()}
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

export default EducationItemCard;