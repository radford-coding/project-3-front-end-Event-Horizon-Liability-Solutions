import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from '../../services/userService';
import './EmployeeList.css';

const EmployeeList = () => {

    const { user } = useContext(UserContext);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const fetchedEmployees = await userService.employeeList(user._id);
            console.log(user);
             //sort EmployeeList alphabetically first name 
             const sortedEmployees = fetchedEmployees.sort((a, b) => 
                a.fullname.localeCompare(b.fullname)
            );
            setEmployees(sortedEmployees);
        };
        fetchEmployees();
    }, [user]);
    

    return (
        <main>
            <h2>EHLS Employees</h2>
            <ul>
            <div className="typewriter">
                {employees.map((employee) => (
                    <NavLink key={employee._id} to={`/employees/${employee._id}`}>
                        <li>{employee.fullname}</li>
                    </NavLink>
                ))}
                </div>
            </ul>
            <NavLink to='/orgchart/'><button type='button'>Org Chart</button></NavLink>
        </main>
    );
};

export default EmployeeList