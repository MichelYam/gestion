import React from 'react'
import SideBar from '../../Components/SideBar/index';

import { contactMockData } from '../../data/mockData'
import Contact from '../../Components/Contact/index'
import '../style.css'
import SearchBar from '../../Components/SearchBar';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { selectUser } from '../../utils/selector';
import { logout } from '../../Redux/features/userSlice';

interface IUser {
    id: number,
    firstName: string
    lastName: string,
    email: string,
}
const Index = () => {
    const { userInfo } = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const logOut = () => { dispatch(logout()) }
    return (
        <>
        <h2>Chat</h2>
            {/* <SideBar logout={logOut} />
            <div className='content'>
                <div className='contacts'>
                    <h3>Liste des contacts</h3>
                    <SearchBar />
                    <div className='contact-list'>
                        {
                            contactMockData.map((contact, index) => {
                                return <Contact key={index} {...contact} />
                            })
                        }
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Index