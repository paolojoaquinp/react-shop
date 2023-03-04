import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../templates/Login';
import Profile from '../templates/Profile';
import RegisterAccount from '../templates/RegisterAccount';
import Home from '../templates/Home';
import NotFound from '../templates/NotFound';
import Orders from '../templates/Checkout';
import '../styles/global.scss';
import MyOrder from '../containers/MyOrder';
import NewPassword from '../templates/NewPassword';
import SendEmail from '../templates/SendEmail';
import Checkout from '../templates/Checkout';
import PasswordRecovery from '../templates/PasswordRecovery';

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