import {EmployeeData} from './types';

export const initialEmployees: EmployeeData[] = [
    {
        id: 1,
        firstName: 'Hamid',
        lastName: 'Aebadi',
        role: 'IT-coordinator',
        state:'AVAILABLE',
        email: 'hamid.aebadi@folkis.com'
    },
    {
        id: 2,
        firstName: 'Razia',
        lastName: 'Nourozi',
        role: 'Sairaanhoitaja',
        state:'AVAILABLE',
        email: 'razia.nouroozi@folkis.com'
    },
    {
        id: 3,
        firstName: 'Monica',
        lastName: 'Pretz',
        role: 'Chef',
        state:'SICK',
        email: 'monica.pretz@folkis.com'
    },
    {
        id: 4,
        firstName: 'Morten',
        lastName: 'Pederson',
        role: 'Sairaanhoitaja',
        state:'VACATION',
        email: 'morten.pederson@folkis.com'
    }
]