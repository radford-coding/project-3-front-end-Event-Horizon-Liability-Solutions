import { NavLink } from "react-router";

const EmployeeList = (props) => {

    return (
        <main>
            <h2>EHLS Employees</h2>
            <ul>
                {props.employees.map((employee) => (
                    <NavLink key={employee._id} to={`/employees/${employee._id}`}>
                        <li>{employee.fullname}</li>
                    </NavLink>
                ))}
            </ul>
        </main>
    );
};

export default EmployeeList