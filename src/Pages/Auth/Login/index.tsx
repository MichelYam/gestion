import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import Form from '../../../Components/Form/index';
import { useAppSelector } from '../../../Redux/store';
import { selectUser } from '../../../utils/selector';

import './style.css';

const Index = () => {
    const { userToken } = useAppSelector(selectUser)
    if (userToken) return <Navigate to="/dashboard" />;
    return (
        <div className='login'>
            <div>Login</div>
            <Form title="Se connecter" isLogin={true} />
        </div>
    )
}
export default Index