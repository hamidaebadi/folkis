import React from "react";
import {Link} from 'react-router-dom';

const ShiftSheets = () => {

    const shiftLists = [
        {id: 0, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 1, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 2, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 3, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 4, title: 'Folkhälsan - silver', period: "10/04-10/05"}
        ]
    return(
        <div className="shift-page">
            <button className="add-btn"> Create new Schedule</button>
            <div className="shift-sheet-panel">
                <ul>
                    {shiftLists.map(item => <li key={item.id}>
                        <Link to={`view/${item.id}`}>
                            {item.title} : {item.period}
                            </Link>
                        </li>)}
                </ul>
                
            </div>
        </div>
    )
}

export default ShiftSheets;