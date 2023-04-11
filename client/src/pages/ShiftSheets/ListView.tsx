import React from "react";
import {Link} from 'react-router-dom';
import TabBar from "../../components/TabBar/TabBar";
import TabBarButton from "../../components/TabBar/TabBarButton";

const ListView = () => {
    const shiftLists = [
        {id: 0, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 1, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 2, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 3, title: 'Folkhälsan - silver', period: "10/04-10/05"},
        {id: 4, title: 'Folkhälsan - silver', period: "10/04-10/05"}
        ]

    return(
        <div>
             <TabBar>
                <TabBarButton text="Add Schedule"/>
            </TabBar>
            <div>
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

export default ListView;