import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import * as userService from '../../services/userService';
import { UserContext } from "../../contexts/UserContext";
import NavBar from "../NavBar/NavBar";
import './EmployeeForm.css';

const initialEmployeeFormData = {
    fullname: '',
    age: 1,
    role: '',
    permissions: [],
    files: [],
};

const allPermissions = [
    'view-tasks',
    'edit-records',
    'manage-files',
    'assign-tasks',
];

const EmployeeForm = (props) => {
    const [employeeFormData, setEmployeeFormData] = useState(initialEmployeeFormData);
    const { employeeId } = useParams();
    const { user } = useContext(UserContext);
    const [employeePermissionCheckboxes, setEmployeePermissionCheckboxes] = useState(new Array(allPermissions.length).fill(false));
    const [newFile, setNewFile] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [allEmployees, setAllEmployees] = useState([]);

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z]+, \s*[a-zA-Z]+$/;
        return nameRegex.test(name);
    };
    const validateAge = (age) => {
        const ageRegex = /^[1-9][0-9]{0,3}$/;
        return ageRegex.test(age);
    };
    const validateRole = (role) => {
        const roleRegex = /^[A-Za-z\s]+$/;
        return roleRegex.test(role);
    };
    const validateFileName = (fileName) => {
        const fileRegex = /^[a-zA-Z0-9_-]{1,50}\.[a-zA-Z0-9]{2,4}$/;
        return fileRegex.test(fileName);
    };
    const validateUniqueName = (name, existingEmployees) => {
        return !existingEmployees.some(employee => employee.fullname.toLowerCase() === name.toLowerCase());
    };

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await userService.employeeDetails(user._id, employeeId);
            setEmployeeFormData(employeeData);
            const newPermissions = [...allPermissions].map(p => employeeData.permissions.includes(p));
            setEmployeePermissionCheckboxes(newPermissions);
        };
        const fetchEmployees = async () => {
            const fetchedEmployees = await userService.employeeList(user._id);
            const sortedEmployees = fetchedEmployees.sort((a, b) =>
                a.fullname.localeCompare(b.fullname)
            );
            setAllEmployees(sortedEmployees);
        };
        fetchEmployees();
        if (employeeId) fetchEmployee();
        return () => setEmployeeFormData(initialEmployeeFormData);
    }, [user, employeeId]);

    const handleEasyChange = (evt) => {
        setEmployeeFormData({
            ...employeeFormData,
            [evt.target.name]: evt.target.value,
        });
    };

    const handlePermissionsChange = (position) => {
        setEmployeePermissionCheckboxes((prevState) => {
            const updatedPermissions = prevState.map((item, index) => (
                index === position ? !item : item
            ));
            const newPermissions = allPermissions.filter((_, index) => (
                updatedPermissions[index] === true
            ));
            setEmployeeFormData({
                ...employeeFormData,
                permissions: newPermissions,
            });
            return updatedPermissions;
        });
    };

    const handleFileChange = (evt) => {
        setNewFile(evt.target.value);
    };

    const handleAddFile = (evt) => {
        evt.preventDefault();

        if (!validateFileName(newFile)) {
            setErrorMessage(`Invalid file name «${newFile}». Ensure the file name is less than 50 characters and has a valid extension.`);
            return;
        }
        setEmployeeFormData({
            ...employeeFormData,
            files: [...employeeFormData.files, newFile],
        });
        setNewFile('');
        setErrorMessage('');
    };

    const handleFileDelete = (evt) => {
        evt.preventDefault();
        const newFiles = [...employeeFormData.files].filter((_, i) => i !== Number(evt.target.id.split('-')[0]));
        setEmployeeFormData({
            ...employeeFormData,
            files: newFiles,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (!validateName(employeeFormData.fullname)) {
            setErrorMessage(`Invalid name «${employeeFormData.fullname}». Must be of format: lastname, firstname.`);
            return;
        }
        if (!validateRole(employeeFormData.role)) {
            setErrorMessage(`Invalid role «${employeeFormData.role}». Must be only letters and spaces.`);
            return;
        }
        if (!validateAge(employeeFormData.age)) {
            setErrorMessage(`Invalid age «${employeeFormData.age}». Age must be a positive integer from 1 to 9999.`);
            return;
        }

        if (!validateUniqueName(employeeFormData.fullname, allEmployees) && !allEmployees.some(ee => ee._id === employeeId)) {
            setErrorMessage(`Employee «${employeeFormData.fullname}» already exists. Please use a different name.`);
            return;
        }
        setErrorMessage('');

        if (employeeId) {
            props.handleUpdateEmployee(employeeId, employeeFormData);
        } else {
            props.handleAddEmployee(employeeFormData);
        };
    };

    return (
        <>
            <NavBar target={'employee-database'}></NavBar>
            <main>
                <header className="typewriter">{employeeId ? `${employeeId}/edit` : 'new'}</header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div className="basic-input">
                            <label htmlFor='fullname-input'>name: </label>
                            <input
                                required
                                type='text'
                                name='fullname'
                                id='fullname-input'
                                value={employeeFormData.fullname}
                                onChange={handleEasyChange}
                            />
                        </div>
                        <br />
                        <div className="basic-input">
                            <label htmlFor='age-input'>age: </label>
                            <input
                                required
                                type='number'
                                name='age'
                                id='age-input'
                                value={employeeFormData.age}
                                onChange={handleEasyChange}
                            />
                        </div>
                        <br />
                        <div className="basic-input">
                            <label htmlFor='role-input'>role: </label>
                            <input
                                required
                                type='text'
                                name='role'
                                id='role-input'
                                value={employeeFormData.role}
                                onChange={handleEasyChange}
                            />
                        </div>
                        <br />
                        <fieldset>
                            <legend>permissions:</legend>
                            {allPermissions.map((permission, index) => (
                                <div key={index}>
                                    <input
                                        type='checkbox'
                                        id={`permission-${index}-input`}
                                        name={permission}
                                        value={permission}
                                        checked={employeePermissionCheckboxes[index]}
                                        onChange={() => handlePermissionsChange(index)}
                                    />
                                    <label htmlFor={`permission-${index}-input`}>{permission}</label>
                                </div>
                            ))}
                        </fieldset>
                        <br />
                        <fieldset>
                            <legend>files:</legend>
                            {employeeFormData.files.length
                                ? employeeFormData.files.map((file, index) => (
                                    <div key={index} className="files-container">
                                        <button
                                            id={`${index}-delete-button`}
                                            onClick={handleFileDelete}
                                            className="red-text"
                                        >
                                            ✖
                                        </button>
                                        <p key={index}>{file}</p>
                                    </div>
                                ))
                                : <div>[none]</div>}
                        </fieldset>
                        <br />
                        <fieldset className="files-container">
                            <legend>add_file:</legend>
                            <div className="files-container">
                                <button
                                    onClick={handleAddFile}
                                >
                                    add
                                </button>
                                <input
                                    type="text"
                                    value={newFile}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </fieldset>
                        {errorMessage ? <p className="error">{errorMessage}</p> : <></>}
                        <section className="button-container">
                            <button type='submit'>{employeeId ? 'update' : 'add_employee'}</button>
                        </section>
                    </form>
                </section>
            </main>
        </>
    );
};

export default EmployeeForm