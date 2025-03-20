import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import * as userService from '../../services/userService';
import { UserContext } from "../../contexts/UserContext";

const initialEmployeeFormData = {
    fullname: '',
    age: 0,
    role: '',
    permissions: [],
    files: [],
};

//TODO: needs to be all possible permissions
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

    useEffect(() => {
        const fetchEmployee = async () => {
            const employeeData = await userService.employeeDetails(user._id, employeeId);
            setEmployeeFormData(employeeData);
            //TODO change variable name
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
        //TODO: this function is wrong somehow. State is 1 click behind always
        // set the checkbox true/false values
        const updatedPermissions = employeePermissionCheckboxes.map((item, index) => (
            index === position ? !item : item
        ));
        setEmployeePermissionCheckboxes(updatedPermissions);
        // set the form data state values correspondingly????
        const newPermissions = allPermissions.filter((_, index) => (
            employeePermissionCheckboxes[index] === true
        ));
        // console.log('newPermissions', newPermissions)
        setEmployeeFormData({
            ...employeeFormData,
            permissions: newPermissions,
        });
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

    // useEffect(() => {
    //     console.log('newPermissions', employeeFormData.permissions);
    // }, [employeeFormData]);

    return (
        <main>
            <h1>{employeeId ? 'edit' : 'new'}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='fullname-input'>Name</label>
                <input
                    required
                    type='text'
                    name='fullname'
                    id='fullname-input'
                    value={employeeFormData.fullname}
                    onChange={handleEasyChange}
                />
                <br />
                <label htmlFor='age-input'>Age</label>
                <input
                    required
                    type='number'
                    name='age'
                    id='age-input'
                    value={employeeFormData.age}
                    onChange={handleEasyChange}
                />
                <br />
                <label htmlFor='role-input'>Role</label>
                <input
                    required
                    type='text'
                    name='role'
                    id='role-input'
                    value={employeeFormData.role}
                    onChange={handleEasyChange}
                />
                <br />
                {/* <label htmlFor='permissions-input'>Permissions</label>
                <select
                    multiple
                    name="permissions"
                    id="permissions-input"
                    onChange={handleChange}
                >
                    {allPermissions.map((permission, index) => (
                        <option key={index} value={permission}>{permission}</option>
                    ))}
                </select> */}
                <fieldset>
                    <legend>Permissions</legend>
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
                    <legend>Files</legend>
                    {employeeFormData.files.map((file, index) => (
                        <div key={index}>
                            <p key={index}>{file}</p>
                            <button
                                id={`${index}-delete-button`}
                                onClick={handleFileDelete}
                            >x</button>
                        </div>
                    ))}
                </fieldset>

                <button type='submit'>{employeeId ? 'update' : 'add this employee'}</button>
            </form>
        </main>
    );
};

export default EmployeeForm