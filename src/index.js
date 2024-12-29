import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginReg from './components/pages/auth/LoginReg';
import Attendence from './components/pages/attendence/Attendence';
import Leave from './components/pages/leaves/Leave';
import Salary from './components/pages/salary/Salary';
import Timesheet from './components/pages/timesheet/Timesheet';
import Performance from './components/pages/performance/Performance';
import PageNotFound from './components/pages/PageNotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="login" element={<LoginReg />} />
        <Route path="attendence" element={<Attendence />} />
        <Route path="leave" element={<Leave />} />
        <Route path="salary" element={<Salary />} />
        <Route path="timesheet" element={<Timesheet />} />
        <Route path="performance" element={<Performance />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
