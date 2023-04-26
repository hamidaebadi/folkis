import React, { useRef, useState } from 'react';
import {Formik, Form} from 'formik';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { range } from '../../helper_funcs';
import Button from '../Button/Button';
import { EducationItem, QualificationItem } from '../../types';
import {v4 as uuidv4} from 'uuid';

const NewEmployeeForm = () => {
    const [educations, setEducations] = useState<EducationItem[]>([])
    const [qualifications, setQualifications] = useState<QualificationItem[]>([])

    const formRef = useRef()

    const handleQualifications = () => {
        const formState: any= formRef.current;
        const qualObj: QualificationItem = {
            id: uuidv4(),
            qualification_title: formState.values.qualification_title,
            month_expiration: formState.values.month_expiration,
            year_expiration: formState.values.year_expiration
        };
        setQualifications(qualifications.concat(qualObj));
        formState.values.qualification_title = '';
        formState.values.month_expiration = '';
        formState.values.year_expiration = '';
    }

    const handleEducations = () => {
        const formState: any= formRef.current;
        const educationObj: EducationItem = {
            id: uuidv4(),
            title: formState.values.education_title,
            institution_name: formState.values.institution_name,
            graduation_year: formState.values.graduation_year
        }
        setEducations(educations.concat(educationObj))
        formState.values.education_title='';
        formState.values.institution_name = '';
        formState.values.graduation_year = '';
    }

    return(
        <>
        <Formik
        initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            phone_primary: '',
            base_salary: '',
            street_primary: '',
            street_secondry: '',
            postal_code: '',
            city: '',
            country: '',
            qualification_title: '',
            month_expiration: '',
            year_expiration: '',
            education_title: '',
            institution_name: '',
            graduation_year: '',

        }}
        onSubmit={()=>console.log('Submitted')}
        innerRef={formRef}
        >
            <Form className='empl-creation-form'>
                <div className='empl-form-section'>
                    <div><h4>Basic Info</h4></div>
                    <div>
                        <TextInput 
                        name='first_name'
                        type='text'
                        placeholder='First Name'
                        />
                        <TextInput 
                        name='last_name'
                        type='text'
                        placeholder='Last Name'
                        />
                    </div>
                    <div>
                        <TextInput
                        name='email'
                        type='email'
                        placeholder='Email'
                        />
                    </div>
                    <div>
                        <TextInput 
                        name='phone_primary'
                        type='tel'
                        placeholder='Phone number'
                        />
                        <TextInput 
                        name='base_salary'
                        type='text'
                        placeholder='Base Salary per hour'
                        />
                    </div>
                </div>

                <div className='empl-form-section'>
                    <div><h4>Address Info</h4></div>
                    <div>
                        <TextInput 
                        name='street_primary'
                        type='text'
                        placeholder='Street name'
                        />
                        <TextInput 
                        name='street_secondry'
                        type='text'
                        placeholder='street name (Optional)'
                        />
                    </div>
                    <div>
                        <TextInput 
                        name='postal_code'
                        type='text'
                        placeholder='Postal Code'
                        />
                        <TextInput 
                        name='city'
                        type='text'
                        placeholder='City'
                        />
                    </div>
                    <div>
                        <TextInput 
                        name='country'
                        type='text'
                        placeholder='Country'
                        />
                    </div>
                </div>

                <div className='empl-form-section'>
                            <div><h4>Educations</h4></div>
                            <div>
                            <TextInput 
                            name='education_title'
                            type='text'
                            placeholder='title'
                            />
                            <TextInput 
                            name='institution_name'
                            type='text'
                            placeholder='Name of the Institution'
                            />
                        </div>
                        <div>
                        <SelectInput label='Year of Graduation '
                        name='graduation_year' className='select-input'>
                        <option value=''>Select year</option>
                        {range(50, 2023, true).map((year) => (
                            <option key={year} value={year.toString()}>{year}</option>
                        ))}
                        </SelectInput>
                    </div>
                    <div><Button className='btn-primary-sm' type='button' onClick={handleEducations}>Add Education</Button></div>
                    <div>
                        {educations.map(item => <div key={item.id}>{item.title} - {item.institution_name} - {item.graduation_year}</div>)}
                    </div>
                </div>

                <div className='empl-form-section'>
                    <div><h4>Licenses & Qualifications</h4></div>
                    <div>
                            <TextInput 
                            name='qualification_title'
                            type='text'
                            placeholder='title'
                            />
                        
                        </div>
                        <div>
                        <SelectInput label='Expiry Date '
                        name='month_expiration' className='select-input'>
                        <option value=''>Select Month</option>
                        {range(11, 0).map((month) => (
                            <option key={month} value={month.toString()}>{month}</option>
                        ))}
                        </SelectInput>

                        <SelectInput label=' / '
                        name='year_expiration' className='select-input'>
                        <option value=''>Select Year</option>
                        {range(30, 2023).map((year) => (
                            <option key={year} value={year.toString()}>{year}</option>
                        ))}
                        </SelectInput>
                    </div>
                        <div><Button className='btn-primary-sm' type='button' onClick={handleQualifications}>Add qualification</Button></div>
                    <div>
                        {qualifications.map(item => <div key={item.id}>
                        {item.qualification_title}, expires on {item.month_expiration}/{item.year_expiration}</div>)}
                    </div>
                </div>
                
                <div className='empl-form-section'>
                    <div>
                        <Button className='btn-primary-sm' type='submit'>Save Employee</Button>
                    </div>
                </div>
                
            </Form>
        </Formik>

        </>
    )
}

export default NewEmployeeForm;