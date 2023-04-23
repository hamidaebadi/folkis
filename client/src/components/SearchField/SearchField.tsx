import React from 'react';

const SearchField = ({...props }:
    { [x: string]: any }) => {
    return(<input {...props} className='search-input'/>)
}

export default SearchField;