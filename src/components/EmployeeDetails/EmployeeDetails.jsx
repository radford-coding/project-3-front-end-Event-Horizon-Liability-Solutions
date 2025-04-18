import { useContext, useEffect, useState } from "react";
import { useParams, NavLink } from "react-router";
import * as userService from '../../services/userService';
import { UserContext } from "../../contexts/UserContext";
import NavBar from '../NavBar/NavBar';

const EmployeeDetails = (props) => {
    const { employeeId } = useParams();
    const { user } = useContext(UserContext);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await userService.employeeDetails(user._id, employeeId);
            setEmployee(employeeData);
        };
        fetchEmployee();
    }, [user, employeeId]);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            props.handleDeleteEmployee(employeeId);
        };
    };

    if (!employee) return <main>Loading...</main>

    return (
        <>
            <NavBar target={'employee-database'}></NavBar>
            <main>
                <header className="typewriter">{employeeId}</header>
                <section>
                    <p>name: {employee.fullname}</p>
                    <p>age: {employee.age}</p>
                    <p>role: {employee.role}</p>
                    <p>permissions: {employee.permissions.length ? employee.permissions.join(', ') : '[none]'}</p>
                    <p>files: {employee.files.length ? employee.files.join(', ') : '[none]'}</p>
                </section>
                <section className="button-container">
                    <NavLink to={`/employees/${employeeId}/edit`}><button>edit</button></NavLink>
                    <button onClick={handleDelete} className="red-text">delete</button>
                </section>
            </main>
        </>
    );
};

export default EmployeeDetails