import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from '../../services/userService';

const EmployeeList = () => {

    const { user } = useContext(UserContext);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const fetchedEmployees = await userService.employeeList(user._id);
            setEmployees(fetchedEmployees);
        };
        fetchEmployees();
    }, [user]);

    return (
        <main>
            <h2>EHLS Employees</h2>
            <ul>
                {employees.map((employee) => (
                    <NavLink key={employee._id} to={`/employees/${employee._id}`}>
                        <li>{employee.fullname}</li>
                    </NavLink>
                ))}
            </ul>
        </main>
    );
};

export default EmployeeList