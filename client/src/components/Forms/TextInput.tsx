/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {useField} from 'formik';

const TextInput = ({...props }:
    { [x: string]: any; name: string, id?: string }) => {

    const [field, meta] = useField(props);
    return (
      <>
        <input {...field} {...props} className="text-input"/>
        {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
      </>
    );
  };

export default TextInput;