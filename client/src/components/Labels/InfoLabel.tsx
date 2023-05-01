import React from 'react';

const InfoLabel = ({title, children}: {title: string, children: React.ReactNode}) => {
    return(
        <div className='info-label'>
            <label>{title}</label>
            <div>{children}</div>
        </div>
    )
}

export default InfoLabel;