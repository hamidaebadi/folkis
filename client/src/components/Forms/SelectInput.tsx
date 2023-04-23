import React from 'react';
import { useField } from 'formik';

const SelectInput = ({label, ...props}: { [x: string]: any; name: string, label: string, id?:string}) => {
    const [field, meta] = useField(props)
    return(
        <>
         <div>
         <label htmlFor={props.id || props.name}>{label}</label>
       <select {...field} {...props} />
        {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
        </div>
        </>
    )
}

export default SelectInput;