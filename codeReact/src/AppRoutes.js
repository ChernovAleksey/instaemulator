import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import Posts from './Pages/Posts/Posts'
import User from "./Pages/User/User";


const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Posts />} />

      <Route path="/user" element={<Outlet />}>
        <Route index element={<User />} />
        <Route path=":uI" element={<User />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
