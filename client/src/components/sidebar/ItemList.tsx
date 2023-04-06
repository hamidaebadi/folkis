import React from 'react';
import Item from './Item';

const ItemList = () => {
  return (
    <div className='side-list'>
      <Item title='Dashboard' link='dashboard'/>
      <Item title='Workers' link='workers'/>
      <Item title='Shift Sheets' link='shift-sheets'/>
      <Item title='Settings' link='settings'/>
    </div>
  );
}

export default ItemList;
