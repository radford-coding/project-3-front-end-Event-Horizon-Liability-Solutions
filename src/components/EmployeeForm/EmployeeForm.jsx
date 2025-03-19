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

const EmployeeForm = () => {
    const [employeeFormData, setEmployeeFormData] = useState(initialEmployeeFormData);
    const { employeeId } = useParams();
    const { user } = useContext(UserContext);
    const [employeePermissionCheckboxes, setEmployeePermissionCheckboxes] = useState(new Array(allPermissions.length).fill(false));
    // console.log('employeePermissionCheckboxes', employeePermissionCheckboxes);


    // const [employeeFiles, setEmployeeFiles] = useState([]);

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
            [evt.target.name]: evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value
        });
    };

    const handlePermissionsChange = (position) => {
        const updatedPermissions = employeePermissionCheckboxes.map((item, index) => (
            index === position ? !item : item
        ));
        setEmployeePermissionCheckboxes(updatedPermissions);
        const newPermissions = allPermissions.filter((permission, index) => (
            employeePermissionCheckboxes[index]
        ));
        
        setEmployeeFormData({
            ...employeeFormData,
            permissions: newPermissions,
        });
    };

    useEffect(() => {
        console.log('newPermissions', employeeFormData.permissions);
    }, [employeeFormData]);

    return (
        <main>
            <h1>{employeeId ? 'edit' : 'new'}</h1>
            <form action="">
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
                            <button>x</button>
                        </div>
                    ))}
                </fieldset>


            </form>
        </main>
    );
};

export default EmployeeForm