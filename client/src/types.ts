export type ButtonColor = 'SUCCESS' | 'SUBMIT' | 'INFO' | 'DANGER' | 'WARNING' | 'PRIMARY'|'DARK';
export type ButtonSize = 'LARGE' | 'MEDIUM' |'SMALL';
type TagSize = 'X-SMALL'|'SMALL'|'MEDIUM'|'LARGE'|'X-LARGE';
type TagStatus = 'EXPIRED'|'NATURAL'|'AVAILABLE'|'ACTIVE'|'URGENT'|'WARNING'|'OFF'
type EmployeeState = 'SICK'|'VACATION'|'AVAILABLE'|'ON_SHIFT'

export interface ShiftItem{
    id: number,
    title: string,
    start_date: string,
    end_date: string,
    desc: string,
    status: TagStatus
}

export interface Tag {
    text: string;
    status: TagStatus;
    size: TagSize;
    colorAnim?: boolean;
}

export interface NewShiftFormValues {
    title: string;
    desc: string;
    start_date: string;
    end_date: string;
}




/* Employee's data types*/
export interface EmployeeData{
    id: string;
    general_info: EmployeeGeneralInfo;
    contact_info: EmployeeContactInfo;
    educations: Education[];
    qualifications: Qualification[];
    reveiws: Review[];
    statistics: EmployeeStatistics;
}
interface Review {
    id: string;
    title: string;
    content: string;
    date: Date;
}

export interface Education{
    id: string;
    title: string;
    institution_name: string;
    graduation_year: string;
}

export interface Qualification{
    id: string;
    qualification_title: string;
    month_expiration: string;
    year_expiration: string;
}

export interface EmployeeGeneralInfo {
    first_name: string;
    last_name: string;
    personnel_code: string;
    department: string;
    role: string;
    status: EmployeeState;
    birthday: Date;
    base_salary: string;
    employment_date: Date;
}

export interface EmployeeContactInfo {
    phone_main: string;
    phone_secondary?: string;
    email: string;
    address: Address
}


export interface Address {
    street: string;
    street_secondary?: string;
    postal_code: string;
    city: string;
    country: string;
}

interface EmployeeStatistics{
    worked_hours: string;
    total_leave_days: string;
    performance_scores: string;
}