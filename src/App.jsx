
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';

import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import MissionList from './components/MissionList/MissionList';
import MissionDetails from './components/MissionDetails/MissionDetails';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import OrgChart from './components/OrgChart/OrgChart';
import CorporateCharter from './components/CorporateCharter/CorporateCharter';
import CompanyResourcesList from './components/CompanyResourcesList/CompanyResourcesList';
import BalanceSheet from './components/BalanceSheet/BalanceSheet';
import MissionResult from './components/MissionResult/MissionResult';

import { UserContext } from './contexts/UserContext';
import * as userService from './services/userService';

const App = () => {
  const { user } = useContext(UserContext);
  const [missions, setMissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const missionData = await userService.missionList(user._id);
      setMissions(missionData);
    };

    if (user) fetchData();
  }, [user]);

  const handleAddEmployee = async (employeeFormData) => {
    await userService.createEmployee(user._id, employeeFormData);
    navigate('/employees');
  };

  const handleUpdateEmployee = async (employeeId, employeeFormData) => {
    await userService.editEmployee(user._id, employeeId, employeeFormData);
    console.log('here');
    navigate('/employees');
  };

  const handleDeleteEmployee = async (employeeId) => {
    await userService.deleteEmployee(user._id, employeeId);
    navigate('/employees');
  };

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
            <Route path='/employees' element={<EmployeeList />}></Route>
            <Route path='/employees/:employeeId' element={<EmployeeDetails handleDeleteEmployee={handleDeleteEmployee} />}></Route>
            <Route path='/employees/:employeeId/edit' element={<EmployeeForm handleUpdateEmployee={handleUpdateEmployee} />}></Route>
            <Route path='/employees/new' element={<EmployeeForm handleAddEmployee={handleAddEmployee} />}></Route>
            <Route path='/missions' element={<MissionList missions={missions} />}></Route>
            <Route path='/missions/:missionId' element={<MissionDetails />}></Route>
            <Route path='/welcome' element={<WelcomeScreen />} />
            <Route path='/resources' element={<CompanyResourcesList />} ></Route>
            <Route path='/orgchart' element={<OrgChart />} ></Route>
            <Route path='/charter' element={<CorporateCharter />} ></Route>
            <Route path='/balancesheet' element={<BalanceSheet />} ></Route>
            <Route path='/missionresult' element={<MissionResult />} ></Route>
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
