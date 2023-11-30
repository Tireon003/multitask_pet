import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function PageWrapper() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="*" element={<LandingPage />}/>
            </Routes>
        </BrowserRouter>
            
    )
}