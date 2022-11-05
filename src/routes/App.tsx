import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import RegisterAccount from '../pages/RegisterAccount';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Checkout';
import '../styles/global.scss';
import MyOrder from '../containers/MyOrder';
import NewPassword from '../pages/NewPassword';
import SendEmail from '../pages/SendEmail';
import Checkout from '../pages/Checkout';
import PasswordRecovery from '../pages/PasswordRecovery';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/password-recovery" element={<PasswordRecovery />} />
                        <Route path="/signup" element={<RegisterAccount />} />
                        <Route path="/account" element={<Profile />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/my-order" element={<MyOrder />} />
                        <Route path="/send-email" element={<SendEmail />} />
                        <Route path="/new-password" element={<NewPassword />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;