import React from 'react';
import NavItem from './NavItem';
import { faUserGroup, faTableColumns, faCalendarWeek, faInbox, faGear } from '@fortawesome/free-solid-svg-icons';

const TabNavigation = () => {
  return (
    <div className='tab-navigation'>
      <NavItem title='Basic Info' link='basic-info' icon={faTableColumns}/>
      <NavItem title='Contact Details' link='contact-details' icon={faUserGroup}/>
      <NavItem title='Skills & Qualifications' link='skills-qualifications' icon={faCalendarWeek}/>
      <NavItem title='Reviews' link='reviews' icon={faInbox}/>
      <NavItem title='Statistics' link='statistics' icon={faGear}/>
    </div>
  );
}

export default TabNavigation;
