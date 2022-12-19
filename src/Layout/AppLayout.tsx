import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/index";
import { logout } from "../Redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { selectUser } from "../utils/selector";

import Header from "./Header";
import "./style.css";
const AppLayout = () => {
    const dispatch = useAppDispatch()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const logOut = () => { dispatch(logout()) }
    const { userInfo } = useAppSelector(selectUser)
    return (
        <>
            <SideBar logout={logOut} sidebarOpen={sidebarOpen} />
            <div className="content">
                <Header firstName={userInfo?.firstName} sidebarOnClose={() => setSidebarOpen(!sidebarOpen)} />
                <div className="test">
                    <Outlet />
                </div>
            </div>
        </>
    )
};

export default AppLayout;