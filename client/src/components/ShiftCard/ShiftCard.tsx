import React from 'react';
import {ShiftItem} from '../../types';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';

const ShiftCard = ({id, title, start_date, end_date, desc, status}:ShiftItem) => {
    return(
        <div className="shift-card">
            <div className="card-header">
                <div className="card-period">
                    {start_date} - {end_date}
                </div>
                {title} <br />
                
            </div>
            <div className="card-body">
                {desc}
            </div>
            <div className="card-footer">
                <Button color="PRIMARY" size="MEDIUM" asLink path={`view/${id}`}>Tarkista</Button>
                <Tag text={status=='ACTIVE'? 'Voimassa':'Vanhentunut'} size="SMALL" status={status}/>
            </div>
        </div>
    )
}

export default ShiftCard;