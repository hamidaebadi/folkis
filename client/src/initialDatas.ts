import {EmployeeData} from './types';

export const testEmployees: EmployeeData[] = [
    {
        id: '1',
        general_info: {
            first_name: 'Razia',
            last_name: 'Nouroozi',
            personnel_code: 'RaNou1200',
            department: 'Silver hemmet',
            role: 'Nurse',
            status: 'AVAILABLE',
            birthday: new Date('August 21 1997'),
            base_salary: '15',
            employment_date: new Date('April 11 2021')
        },
        contact_info: {
            phone_main: '0503440952',
            phone_secondary: '0465460500',
            email: 'razia.nouroozi77@gmail.com',
            address: {
                street: 'Alempi Talonpojantie 4 B',
                postal_code: '00700',
                city: 'Helsinki',
                country: 'Suomi'
            }
        },
        educations:[
            {
                id: 'ed1',
                title: 'Saairaanhoitajan Perustutkinto',
                institution_name: 'Vaasan Yliopisto',
                graduation_year: '2019',
                start: new Date('September 1 2010'),
                end: new Date('June 30 2015')
            }
        ],
        qualifications: [
            {
                id: 'qual1',
                qualification_title: 'B - Driving License',
                month_expiration: '10',
                year_expiration: '2025',
            }
        ],
        reveiws: [
            {
                id: 're1',
                title: 'Reveiw on Razia nouroozi',
                content: 'On monday 21.07.2023 she was very helpful and creative',
                date: new Date()
            }
        ],
        statistics:{
            worked_hours: '2240',
            total_leave_days: '120',
            performance_scores: '100',
        }

    },

    {
        id: '2',
        general_info: {
            first_name: 'Mortta',
            last_name: 'Magen',
            personnel_code: 'MoMg',
            department: 'Kultajousi',
            role: 'Nurse',
            status: 'AVAILABLE',
            birthday: new Date('December 15 1990'),
            base_salary: '16',
            employment_date: new Date('April 20 2015')
        },
        contact_info: {
            phone_main: '0464345353',
            phone_secondary: '0465460500',
            email: 'mortta.mogen@yahoo.com',
            address: {
                street: 'Hietapellontie 4 B',
                postal_code: '00700',
                city: 'Helsinki',
                country: 'Suomi'
            }
        },
        educations:[
            {
                id: 'ed1',
                title: 'Saairaanhoitajan Perustutkinto',
                institution_name: 'Vaasan Yliopisto',
                graduation_year: '2019',
                start: new Date('September 01 2010'),
                end: new Date('June 30 2013')
            },
            {
                id: 'ed2',
                title: 'Pysokologian kandidaatti',
                institution_name: 'University of Lappeenranta',
                graduation_year: '2010',
                start: new Date('September 01 2016'),
                end: new Date('June 30 2021')
            }
        ],
        qualifications: [
            {
                id: 'qual1',
                qualification_title: 'First-aid Care',
                month_expiration: '2',
                year_expiration: '2026',
            },
            {
                id: 'qual2',
                qualification_title: 'B - Driving License',
                month_expiration: '6',
                year_expiration: '2024',
            }
        ],
        reveiws: [
            
        ],
        statistics:{
            worked_hours: '3434002',
            total_leave_days: '1800',
            performance_scores: '96',
        }

    }
]