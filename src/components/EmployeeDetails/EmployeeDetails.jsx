import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";
import * as userService from '../../services/userService';
import { UserContext } from "../../contexts/UserContext";
import './EmployeeDetails.css';

const EmployeeDetails = (props) => {
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
            <p>permissions: {employee.permissions.length ? employee.permissions.map(p => p + ', ') : '[none]'}</p>
            <p>files: {employee.files.length ? employee.files.map(f => f + ', ') : '[none]'}</p>
            <NavLink to={`/employees/${employeeId}/edit`}>edit</NavLink>
            <button onClick={() => props.handleDeleteEmployee(employeeId)}>delete</button>
        </main>
    );
};

export default EmployeeDetails