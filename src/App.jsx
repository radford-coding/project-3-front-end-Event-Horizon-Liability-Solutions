
import './App.css';
import { useContext, useEffect, useState } from 'react';

// import { Routes, Route, useSearchParams } from 'react-router';
import { Routes, Route, useNavigate } from 'react-router';


import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import MissionList from './components/MissionList/MissionList';
import MissionDetails from './components/MissionDetails/MissionDetails';

import { UserContext } from './contexts/UserContext';
import * as userService from './services/userService';

import './App.css';

const App = () => {
  const { user } = useContext(UserContext);
  const [missions, setMissions] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const employeeData = await userService.employeeList(user._id);
      const missionData = await userService.missionList(user._id);
      setEmployees(employeeData);
      setMissions(missionData);
    };
    if (user) fetchData();
  }, [user]);

  const handleAddEmployee = async (employeeFormData) => {
    console.log('employeeFormData', employeeFormData);
    const newEmployee = await userService.createEmployee(user._id, employeeFormData);
    setEmployees([...employees, newEmployee]);
    console.log('newEmployee', newEmployee);
    navigate('/employees');
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path='/employees' element={<EmployeeList />}></Route>
            <Route path='/employees/:employeeId' element={<EmployeeDetails />}></Route>
            <Route path='/employees/:employeeId/edit' element={<EmployeeForm />}></Route>
            <Route path='/employees/new' element={<EmployeeForm handleAddEmployee={handleAddEmployee} />}></Route>
            <Route path='/missions' element={<MissionList missions={missions} />}></Route>
            <Route path='/missions/:missionId' element={<MissionDetails />}></Route>
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
