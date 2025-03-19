import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";
import * as userService from '../../services/userService';
import { UserContext } from "../../contexts/UserContext";

const EmployeeDetails = () => {
    const { employeeId } = useParams();
    const {user} = useContext(UserContext);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await userService.employeeDetails(user._id, employeeId);
            setEmployee(employeeData);
        };
        fetchEmployee();
    }, [user, employeeId]);

    // console.log('employee:', employee);

    if (!employee) return <main>Loading...</main>

    return (
        <main>
            <h2>{employee.fullname}</h2>
            <p>age: {employee.age}</p>
            <p>role: {employee.role}</p>
            <p>permissions: {employee.permissions.map(p => p + ', ')}</p>
            <p>files: {employee.files.map(f => f + ', ')}</p>
            <NavLink to={`/employees/${employeeId}/edit`}>edit</NavLink>
        </main>
    );
};

export default EmployeeDetails