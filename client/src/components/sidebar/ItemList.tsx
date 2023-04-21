import React from 'react';
import Item from './Item';

const ItemList = () => {
  return (
    <div className='side-list'>
      <Item title='Dashboard' link='dashboard'/>
      <Item title='Employees' link='workers'/>
      <Item title='Shift Scheduels' link='shift-sheets'/>
      <Item title='Inbox' link='inbox'/>
      <Item title='Settings' link='settings'/>
    </div>
  );
}

export default ItemList;
