import React from 'react';
import NavItem from './NavItem';
import { faIdCard, faContactCard, faSchool } from '@fortawesome/free-solid-svg-icons';

const TabNavigation = () => {
  return (
    <div className='tab-navigation'>
      <NavItem title='General Info' link='general-info' icon={faIdCard}/>
      <NavItem title='Contact Details' link='contact-details' icon={faContactCard}/>
      <NavItem title='Educations & Qualifications' link='skills-qualifications' icon={faSchool}/>
      <NavItem title='Reviews' link='reviews' />
      <NavItem title='Statistics' link='statistics' />
    </div>
  );
}

export default TabNavigation;
