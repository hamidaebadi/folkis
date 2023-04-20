export type ButtonColor = 'SUCCESS' | 'SUBMIT' | 'INFO' | 'DANGER' | 'WARNING' | 'PRIMARY'|'DARK';
export type ButtonSize = 'LARGE' | 'MEDIUM' |'SMALL';
type TagSize = 'X-SMALL'|'SMALL'|'MEDIUM'|'LARGE'|'X-LARGE';
type TagStatus = 'EXPIRED'|'NATURAL'|'AVAILABLE'|'ACTIVE'|'URGENT'|'WARNING'|'OFF'

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

