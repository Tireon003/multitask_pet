import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import { publicRoutes, privateRoutes } from "../routes";


export default function PageWrapper() {

    const [user, setUser] = useState([1]);


    return user.length ? 
    (
        <Routes>
            {/* <Route path="/" element={<LandingPage />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="*" element={<Navigate to="/" replace />}/> */}
            {privateRoutes.map(route => <Route path={route.path} element={route.element}/>)}
        </Routes>
            
    )
    :
    (
        <Routes>
            {/* <Route path="/" element={<LandingPage />}/>
            <Route path="*" element={<Navigate to="/" replace />}/> */}
            {publicRoutes.map(route => <Route path={route.path} element={route.element}/>)}
        </Routes>    
         
    )
}