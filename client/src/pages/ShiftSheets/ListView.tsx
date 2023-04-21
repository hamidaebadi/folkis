import React, { useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import Button from '../../components/Button/Button';
import ShiftCard from '../../components/ShiftCard/ShiftCard';
import {ShiftItem} from '../../types';
import ReactModal from 'react-modal';
import NewShiftForm from '../../components/Forms/NewShiftForm';

const ListView = () => {
    const initialShifts:ShiftItem[] = [
        {id: 0, title: 'Title A', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'ACTIVE'},
        {id: 1, title: 'Title B', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 2, title: 'Another title', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'ACTIVE'},
        {id: 3, title: 'Amazing title', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 4, title: 'Another title amazing', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 5, title: 'Title A', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 6, title: 'Title B', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 7, title: 'Another title', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 8, title: 'Amazing title', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 9, title: 'Another title amazing', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 10, title: 'Title A', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 11, title: 'Title B', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 12, title: 'Another title', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 13, title: 'Amazing title', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'},
        {id: 14, title: 'Another title amazing', start_date: '14/4/2023', end_date: '14/05/2023', desc: '', status: 'EXPIRED'}
    ]
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [shiftList, setShiftList] = useState<ShiftItem[]>(initialShifts)
    const handleModalEvent = () => setIsModalOpen(!isModalOpen)

    

    return(
        <>
            <TabBar>
               {!isModalOpen && <Button type="button" color="PRIMARY" size="SMALL" onClick={handleModalEvent}>Luo lista</Button> }
                
            </TabBar>
            <ReactModal isOpen={isModalOpen} className='Modal' >
                <h2>Uusi työvuorolista</h2>
                <NewShiftForm />
                <Button
                type="button" 
                color="WARNING" 
                size="MEDIUM" 
                onClick={handleModalEvent}> X Sulje Ikkuna</Button>
            </ReactModal>
            <div className='shift-list-view'>
                {shiftList.map(item => <div key={item.id}>
                    <ShiftCard 
                    id={item.id}
                    title={item.title}
                    start_date={item.start_date}
                    end_date={item.end_date}
                    desc={item.desc}
                    status={item.status}
                    />
                    </div>)}   
            </div>
        </>
            
    )
}

export default ListView;