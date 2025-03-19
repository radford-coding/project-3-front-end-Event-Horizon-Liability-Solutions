
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import MissionList from './components/MissionList/MissionList';

import { UserContext } from './contexts/UserContext';
import * as userService from './services/userService';

import './App.css';

const App = () => {
  const { user } = useContext(UserContext);
  const [missions, setMissions] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const employeeData = await userService.employeeList(user._id);
      const missionData = await userService.missionList(user._id);
      setEmployees(employeeData);
      setMissions(missionData);
    };
    if (user) fetchData();
  }, [user]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path='/employees' element={<EmployeeList employees={employees} />}></Route>
            <Route path='/employees/:employeeId' element={<EmployeeDetails />}></Route>
            <Route path='/missions' element={<MissionList missions={missions} />}></Route>
          </>
        ) : (
          <>
            <Route path='/sign-up' element={<SignUpForm />} />
            <Route path='/sign-in' element={<SignInForm />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
