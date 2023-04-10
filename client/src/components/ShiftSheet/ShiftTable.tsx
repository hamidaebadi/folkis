import React from "react";

const ShiftTable = () => {
    const employees = [
        {
            id: 1,
            name: "Hamid Aebadi",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 2,
            name: "Razia Nouroozi",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 3,
            name: "Monika peretz",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 4,
            name: "Moo",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 5,
            name: "Morten Pederson",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 6,
            name: "Ella",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 7,
            name: "Donata",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        },
        {
            id: 8,
            name: "Lotta",
            attendance: ['On', 'Off', 'On', 'Off', 'Off', 'On', 'On'],
            totalHours: 25
        }
    ]

    return(
        <>
            <table>
                <tr>
                    <th>Employe name</th>
                    <th>Mon</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    <th>Total hours</th>
                </tr>
                {
                    employees.map((empl) => {
                        return(
                            <tr key={empl.id}>
                                <td>{empl.name}</td>
                                {empl.attendance.map((shift, index)=> <td key={index}>{shift}</td>)}
                                <td>{empl.totalHours}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </> 
    )
}

export default ShiftTable;