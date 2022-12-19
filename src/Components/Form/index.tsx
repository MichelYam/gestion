import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { selectUser } from '../../utils/selector';
import { userLogin, userRegister } from '../../Redux/features/userAction';
import './style.css'
interface IForm {
    title: string,
    isLogin: boolean
}

const Index = ({ title, isLogin }: IForm) => {
    const navigate = useNavigate()
    // const { error } = useAppSelector(selectUser);
    const dispatch = useAppDispatch()
    const [data, setData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        confirmPassword: '',
        remember: false,
    })

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.id]: event.target.id === "remember" ? !data.remember : event.target.value,
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // if (data.email === userLoginData.email && data.password === userLoginData.password) {
        //     console.log("vous êtes connecté")
        //     navigate("/dashboard")
        // }
        event.preventDefault();
        if (isLogin) {
            dispatch(userLogin(data));

        } else {
            if (data.password === data.confirmPassword) {
                dispatch(userRegister(data))
                navigate("/login")
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="control-input">
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name='email' onChange={handleChangeValue} value={data.email} required />
            </div>
            <div className="control-input">
                <label htmlFor="email">Password </label>
                <input type="password" id="password" name='password' onChange={handleChangeValue} value={data.password} required />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember" onChange={handleChangeValue} />
                <label htmlFor="remember"> Remember me</label>
            </div>
            <button className='btn'>{title}</button>
        </form>
    )
}

Index.protoTypes = {
    title: PropTypes.string,
    isLogin: PropTypes.bool
}

export default Index