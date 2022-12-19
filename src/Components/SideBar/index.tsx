import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import appRoutes from '../../routes/appRoutes'

interface IProps {
    logout: () => void
    sidebarOpen: boolean
}


const Index = ({ logout, sidebarOpen }: IProps) => {
    return (
        <div className={`sidebar ${sidebarOpen ? "close" : ""}`}>
            <div className="logo-details">
                <Link to="/dashboard">
                    <i className='bx bxl-c-plus-plus'></i>
                    {/* <span className="logo_name">Nom du site</span> */}
                </Link>
            </div>
            <ul className="nav-links">
                {appRoutes.map((item, index) => {
                    return <li key={index}>
                        <Link to={item.path}>
                            <i className={`bx ${item.sidebarProps?.icon}`} />
                            <span className="link_name">{item.sidebarProps?.displayText}</span>
                        </Link>
                    </li>
                })}
                <li>
                    <Link className="profile-details" to="/" onClick={logout}>
                        <div className="name-job">
                            <i className='bx bx-log-out'></i>
                            <span className="link_name">Sign-out</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Index