import React from 'react';
import {Formik, Form} from 'formik';
import TextInput from './TextInput';

const InlineSearchBox = () => {
    return(
        <Formik 
        initialValues={{content: ''}}
        onSubmit={()=>console.log('searched')}
        >
            <Form>
                <TextInput
                name='conent'
                type='search'
                placeholder='Työntekijän Haku'
                />
            </Form>
        </Formik>
    )
}

export default InlineSearchBox;