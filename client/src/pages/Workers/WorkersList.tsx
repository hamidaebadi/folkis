import React, { useState } from 'react';
import TabBar from '../../components/TabBar/TabBar';
import { EmployeeData } from '../../types';
import { initialEmployees } from '../../initialDatas';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import SearchField from '../../components/SearchField/SearchField';

const WorkersList = () => {
    const [searchWord, setSearchWord] = useState<string>('')
    const [employeeList, setEmployeeList] = useState<EmployeeData[] | null>(initialEmployees)
    
    const handleSearchInput = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchWord(event.currentTarget.value)
        }

    if(searchWord.length != 0){
        const filteredEmployees = employeeList.filter(empl => 
            empl.firstName.toLowerCase()
            .includes(searchWord.toLowerCase()))
        return(
            <>
                <TabBar>
                   <SearchField
                   type='search'
                   placeholder='Search employee...'
                   value={searchWord}
                   onChange={handleSearchInput}
                   />
                </TabBar>
                <div className='workers-list-view'>
                {<EmployeeList employees={filteredEmployees}/>
                }
            </div>
            </> 
        )
    }

    return(
        <>
            <TabBar>
               <SearchField
               type='search'
               placeholder='Search employee...'
               value={searchWord}
               onChange={handleSearchInput}
               />
            </TabBar>
            <div className='workers-list-view'>
            {!employeeList ? <div>Ei yhtään työntekijöitä</div>
            :<EmployeeList employees={employeeList}/>
            }
            </div>
        </> 
    )
    
}

export default WorkersList;