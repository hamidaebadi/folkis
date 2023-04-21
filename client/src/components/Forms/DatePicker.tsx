/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePickerField = ({...props }:{ [x: string]: any; name: string, id?:string}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <>
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />

      {meta.touched && meta.error ? (
          <div className="error-msg">{meta.error}</div>
        ) : null}
    </>
    
  );
};