import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from '../../services/userService';
import NavBar from "../NavBar/NavBar";

const EmployeeList = () => {

    const { user } = useContext(UserContext);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const fetchedEmployees = await userService.employeeList(user._id);
            const sortedEmployees = fetchedEmployees.sort((a, b) =>
                a.fullname.localeCompare(b.fullname)
            );
            setEmployees(sortedEmployees);
        };
        fetchEmployees();
    }, [user]);

    return (
        <>
            <NavBar target={'dashboard'}></NavBar>
            <main>
                <header className="typewriter">employee-database</header>
                <section>

                    <ul>
                        {employees.map((employee) => (
                            <NavLink key={employee._id} to={`/employees/${employee._id}`}>
                                <li>{employee.fullname}</li>
                            </NavLink>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default EmployeeList