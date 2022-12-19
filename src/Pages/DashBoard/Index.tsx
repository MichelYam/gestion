import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { selectUser } from '../../utils/selector';
import { getUserDetails } from '../../Redux/features/userAction';
import { logout } from '../../Redux/features/userSlice';

//components
import SideBar from '../../Components/SideBar/index';
import Header from '../../Layout/Header/index'

//Style
import '../style.css'

const Index = () => {
    return (
        <>
            <h1>DashBoard Content</h1>
        </>
    )

}

export default Index