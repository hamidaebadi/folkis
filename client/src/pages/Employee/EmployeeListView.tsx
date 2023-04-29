import React, { useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import { EmployeeData } from '../../types';
import { testEmployees } from '../../initialDatas';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import SearchField from '../../components/SearchField/SearchField';
import Button from '../../components/Button/Button';
import { faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import NewEmployeeForm from '../../components/Forms/NewEmployeeForm';

const EmployeeListView = () => {

    const [searchWord, setSearchWord] = useState<string>('')
    const [employeeList, setEmployeeList] = useState<EmployeeData[] | null>(testEmployees)
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleSearchInput = (event: React.FormEvent<HTMLInputElement>) => setSearchWord(event.currentTarget.value)
    const filteredEmployees = employeeList.filter(empl => empl.basic_info.first_name.toLowerCase().includes(searchWord.toLowerCase()))

        return(
            <>
                <TabBar>
                    {!modalOpen && <SearchField type='search' placeholder='Search employee...'
                   value={searchWord}
                   onChange={handleSearchInput}
                   /> }
                    
                   {!modalOpen ? <div><Button className='btn-primary-sm' icon={faUserPlus}
                    onClick={()=> setModalOpen(!modalOpen)}>Add Employee</Button></div>
                   :<ReactModal isOpen={modalOpen} className='Modal'
                   ariaHideApp={false}
                    overlayClassName='modal_overlay'>
                    <h3>New Employee</h3>
                    <NewEmployeeForm />
                    <Button className='btn-danger-sm' icon={faXmark} onClick={()=>setModalOpen(!modalOpen)}>Cancel</Button>
                   </ReactModal>
                   }
                   
                </TabBar>

                <div className='workers-list-view'>

                {<EmployeeList employees={searchWord.length == 0 ? employeeList:filteredEmployees}/>}
            </div>
            </> 
        )
    
}

export default EmployeeListView;