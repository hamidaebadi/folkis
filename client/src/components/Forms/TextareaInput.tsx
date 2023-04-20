/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {useField} from 'formik';

const TextareaInput = ({...props }:
    { [x: string]: any; name: string, id?: string }) => {

    const [field, meta] = useField(props);
    return (
      <>
        <textarea className="textarea-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

export default TextareaInput;