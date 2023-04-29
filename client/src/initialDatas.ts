import {EmployeeData} from './types';

export const testEmployees: EmployeeData[] = [
    {
        id: '1',
        basic_info: {
            first_name: 'Razia',
            last_name: 'Nouroozi',
            personnel_code: 'RaNou1200',
            department: 'Silver hemmet',
            role: 'Nurse',
            status: 'AVAILABLE',
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
                graduation_year: '2019'
            }
        ],
        qualifications: [
            {
                id: 'qual1',
                qualification_title: 'B - Driving License',
                month_expiration: '10',
                year_expiration: '06',
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

    }
]