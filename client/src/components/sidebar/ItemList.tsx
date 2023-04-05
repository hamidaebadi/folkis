import React from 'react';
import Item from './Item';

const ItemList = () => {
  return (
    <div className='side-list'>
      <Item title='Dashboard'/>
      <Item title='Workers'/>
      <Item title='Shift Sheets'/>
      <Item title='Settings'/>
    </div>
  );
}

export default ItemList;
