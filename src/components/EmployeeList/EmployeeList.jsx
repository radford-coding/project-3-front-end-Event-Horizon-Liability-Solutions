const EmployeeList = (props) => {

    return (
        <main>
            <h2>EHLS Employees</h2>
            <ul>
                {props.employees.map((employee) => (
                    <li key={employee._id}>{employee.fullname}</li>
                ))}
            </ul>
        </main>
    );
};

export default EmployeeList