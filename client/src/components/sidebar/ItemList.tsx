import React from 'react';
import Item from './Item';
import { faUserGroup, faTableColumns, faCalendarWeek, faInbox, faGear } from '@fortawesome/free-solid-svg-icons';

const ItemList = () => {
  return (
    <div className='side-list'>
      <Item title='Dashboard' link='dashboard' icon={faTableColumns}/>
      <Item title='Employees' link='workers' icon={faUserGroup}/>
      <Item title='Shift Scheduels' link='shift-sheets' icon={faCalendarWeek}/>
      <Item title='Inbox' link='inbox' icon={faInbox}/>
      <Item title='Settings' link='settings' icon={faGear}/>
    </div>
  );
}

export default ItemList;
