import React from "react";
import {Formik, Form} from 'formik';
import {NewShiftFormValues} from '../../types';
import { DatePickerField } from "./DatePicker";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import Button from "../Button/Button";

const NewShiftForm = () => {

    //custom validation function
    const validate = (values: NewShiftFormValues) => {
        const errors:any = {}
        if(!values.title){
            errors.title = 'Required';
        }

        if(!values.start_date){
            errors.start_date = 'Valitse listan alkamispäivä'
        }

        if(!values.end_date){
            errors.end_date = 'Listan loppumispäivä puuttuu'
        }
        return errors;
    }

    return(
            <Formik 
        initialValues={{title: '', desc: '', start_date: '', end_date: ''}}
        onSubmit={(values) => {
            console.log('submitted' + values.title)
        } }
        validate={validate}
        >
            <Form className="shift-form">
                <TextInput 
                name="title"
                type="text"
                placeholder="Kirjoita otsikko"
                />

                <DatePickerField
                    name="start_date"
                    placeholderText="Listan alkamispäivä"
                    className='date-input'
                />
                

                <DatePickerField
                    name="end_date"
                    placeholderText="Listan loppumispäivä"
                    className='date-input'
                />
                    
                

                <TextareaInput 
                name="desc"
                placeholder="Lisää huomatuksia..."
                />

                <Button color="PRIMARY" type="submit" size="LARGE">Luo</Button>
            </Form>

        </Formik>
    )
    
}

export default NewShiftForm;