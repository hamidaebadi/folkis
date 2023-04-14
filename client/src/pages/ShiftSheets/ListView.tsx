import React from "react";
import {Link} from 'react-router-dom';
import TabBar from "../../components/TabBar/TabBar";
import Button from "../../components/Button/Button";

const ListView = () => {
    const list = [
        {id: 0, title: 'Title A', start_date: '14/4/2023', end_date: '14/05/2023'},
        {id: 1, title: 'Title B', start_date: '14/4/2023', end_date: '14/05/2023'},
        {id: 2, title: 'Another title', start_date: '14/4/2023', end_date: '14/05/2023'},
        {id: 3, title: 'Amazing title', start_date: '14/4/2023', end_date: '14/05/2023'},
        {id: 4, title: 'Another title amazing', start_date: '14/4/2023', end_date: '14/05/2023'},
    ]

    return(
        <div>
             <TabBar>
                <Button type="PRIMARY" size="MEDIUM"> Add Schedule</Button>
                <Button type="INFO" size="MEDIUM"> INFO</Button>
                <Button type="WARNING" size="MEDIUM"> Warning</Button>
                <Button type="DANGER" size="MEDIUM"> Danger</Button>
                <Button type="SUCCESS" size="MEDIUM"> Success</Button>
                <Button type="DARK" size="MEDIUM"> Dark</Button>
                
            </TabBar>
            <div className='shift-list-view'>
                {list.map(item => <div key={item.id}>
                    <Link to={`view/${item.id}`}>
                        {item.title}
                        <time>{item.start_date} to {item.end_date}</time>
                    </Link>
                    </div>)}   
            </div>
        </div>
    )
}

export default ListView;