import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import * as userService from '../../services/userService';
import { UserContext } from "../../contexts/UserContext";
import NavBar from "../NavBar/NavBar";
import './EmployeeForm.css';

const initialEmployeeFormData = {
    fullname: '',
    age: 0,
    role: '',
    permissions: [],
    files: [],
};

const allPermissions = [
    'admin',
    'read',
    'write',
    'execute',
];

const EmployeeForm = (props) => {
    const [employeeFormData, setEmployeeFormData] = useState(initialEmployeeFormData);
    const { employeeId } = useParams();
    const { user } = useContext(UserContext);
    const [employeePermissionCheckboxes, setEmployeePermissionCheckboxes] = useState(new Array(allPermissions.length).fill(false));
    const [newFile, setNewFile] = useState('');

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await userService.employeeDetails(user._id, employeeId);
            setEmployeeFormData(employeeData);
            const newPermissions = [...allPermissions].map(p => employeeData.permissions.includes(p));
            setEmployeePermissionCheckboxes(newPermissions);
        };
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
        setEmployeeFormData({
            ...employeeFormData,
            files: [...employeeFormData.files, newFile],
        });
        setNewFile('');
    };

    const handleFileDelete = (evt) => {
        evt.preventDefault();
        console.log('id', evt.target.id);
        const newFiles = [...employeeFormData.files].filter((_, i) => i !== Number(evt.target.id.split('-')[0]));
        console.log('newFiles', newFiles);
        setEmployeeFormData({
            ...employeeFormData,
            files: newFiles,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
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
                <header>{employeeId ? `${employeeId}/edit` : 'new'}</header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <div>
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
                        <div>
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
                        <div>
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
                                        //TODO: what to name?
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
                            {employeeFormData.files.map((file, index) => (
                                <div key={index} className="files-container">
                                    <p key={index}>{file}</p>
                                    <button
                                        id={`${index}-delete-button`}
                                        onClick={handleFileDelete}
                                        className="red-text"
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </fieldset>
                        <br />
                        <fieldset className="files-container">
                            <legend>add_file:</legend>
                            <input
                                type="text"
                                value={newFile}
                                onChange={handleFileChange}
                            />
                            <button
                                onClick={handleAddFile}
                            >
                                add
                            </button>
                        </fieldset>
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