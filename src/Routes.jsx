import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './home';
import BlogDetails from "./blogdetails";

import NewBLog from "./addblog";
import Nomatch from "./nomatch";
import F from "./f";
import N from "./n";
import Users from "./users";
import Userdetails from "./usersDetails";
import Create from "./create";
import Profile from "./profile";
import { AuthProvider } from "./auth";
import Login from "./login";
const Routers = () => {
    return (
        <div className="routes">
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/create' element={<Create />}></Route>
                    <Route path='/blogdetails' element={<BlogDetails />}></Route>
                    <Route path='/newblog' element={<NewBLog />}>
                        <Route index element={<F />}></Route>
                        <Route path='f' element={<F />}></Route>
                        <Route path='n' element={<N />}></Route>
                    </Route>
                    <Route path='users' element={<Users />}></Route>
                    <Route path='users/:userId' element={<Userdetails />}></Route>
                    <Route path='/profile' element={<Profile />}></Route>
                    <Route path='login' element={<Login/>}></Route>
                    <Route path='*' element={<Nomatch />}></Route>
                </Routes>
            </AuthProvider>
        </div>);
}

export default Routers;