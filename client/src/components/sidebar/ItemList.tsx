import React from 'react';
import Item from './Item';

const ItemList = () => {
  return (
    <div className='side-list'>
      <Item title='Työpöytä' link='dashboard'/>
      <Item title='Työntekijät' link='workers'/>
      <Item title='Työvuorolista' link='shift-sheets'/>
      <Item title='Asetukset' link='settings'/>
    </div>
  );
}

export default ItemList;
