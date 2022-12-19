import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

//Page
import Login from './Pages/Auth/Login/index';
import SideBar from './Components/SideBar/index';
import Register from './Pages/Auth/Register/index';
import DashBoard from "./Pages/DashBoard/Index";
import Chat from "./Pages/Chat/Index";
import Tickets from "./Pages/Tickets/Index";
import Settings from "./Pages/Settings/Index";
import PrivateRoute from './Pages/PrivateRoute';
import Error from './Pages/NotFound';
import Header from './Layout/Header';
import { useAppDispatch, useAppSelector } from './Redux/store';
import { selectUser } from './utils/selector';
import { logout } from './Redux/features/userSlice';
import { getUserDetails } from './Redux/features/userAction';
import AppLayout from './Layout/AppLayout';
// import { routes } from './routes';

function App() {

  const { userInfo, userToken } = useAppSelector(selectUser)
  const dispatch = useAppDispatch()
  const [sidebar, setSidebar] = useState(false)
  const logOut = () => { dispatch(logout()) }
  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails())
    }
  }, [userToken, dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<AppLayout />}>
          <Route index path='/dashboard' element={<DashBoard />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
