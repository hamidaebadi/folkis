/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useField} from 'formik';

const SearchInput = ({...props }:
    { [x: string]: any; name: string, id?: string }) => {

    const [field] = useField(props);
    return (
      <>
        <input {...field} {...props} className="search-input"/>
      </>
    );
  };

export default SearchInput;