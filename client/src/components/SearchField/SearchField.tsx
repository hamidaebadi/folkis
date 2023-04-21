import React from 'react';

const SearchField = ({...props }:
    { [x: string]: any }) => {
    return(
        <div>
            <input {...props} className='text-input'/>
        </div>
        
    )
}

export default SearchField;