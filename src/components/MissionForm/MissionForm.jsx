import { useParams, useNavigate } from "react-router";
import * as userService from '../../services/userService';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const MissionForm = (props) => {
    const { user } = useContext(UserContext);
    const { missionId } = useParams();
    const [missionFormData, setMissionFormData] = useState(props.mission);
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            const fetchedEmployees = await userService.employeeList(user._id);
            setEmployees(fetchedEmployees);
        };
        fetchEmployees();
    }, [user]);

    const handleupdateReport = (evt) => {
        setMissionFormData({
            ...missionFormData,
            report: evt.target.value,
        });
    };

    // set criteria for each mission success
    const checkMission = () => {
        // switch case
        // make default if mission not found
        switch (props.mission.title) {
            case 'Log Purge':
                const targetFile = employees.find(employee =>
                    employee.files.includes('colony-incident-log.json')
                );

                if (!targetFile) {
                    console.log("Mission success: Found and removed file.");
                    // Here, you would actually remove the file from the database
                } else {
                    console.log("Mission failed: File still exists.");
                }
                break;

            case 'Imposter Removal':
                const targetEmployee = employees.find(employee =>
                    employee.fullname === "Xalex'Thira-Zar'Nex"
                );

                if (!targetEmployee) {
                    console.log("Mission success: Imposter has been removed.");
                } else {
                    console.log("Mission failed: Imposter still exists in the system.");
                }
                break;

            case 'Promotion System Update':
                // Find Zane Ortega specifically
                const promotedEmployee = employees.find(employee => employee.fullname === "Zane Ortega");

                const promotion = promotedEmployee && promotedEmployee.role === "Space Habitat Manager";
                const permission = promotedEmployee && promotedEmployee.permissions.includes('manage-files');

                if (promotion && permission) {
                    console.log("Mission success: Zane Ortega's role and permissions updated.");
                } else if (promotion && !permission) {
                    console.log("Mission failure: Zane Ortega's permissions not updated.");
                } else if (!promotion && permission) {
                    console.log("Mission failure: Zane Ortega's role not updated.");
                } else {
                    console.log("Mission failure: Zane Ortega's role and permissions not updated.");
                }
                break;

                // case to create employee
            case 'New Aquisition':
                const newEmployee = employees.find(employee => employee.fullname === "Ariella Voss");
                const hasAge = newEmployee && newEmployee.age === 29; 
                const hasRole = newEmployee && newEmployee.role === 'Astrobiologist';

                //add check to make sure they have the correct name?
                //currently name needs to be accurate in order to follow rest of the checks
                if (hasAge && hasRole) {
                    console.log("Mission success: New aquisition added to the database with age and role.");
                } else if (!hasAge && hasRole) {
                    console.log("Mission failure: New acquisition is missing age data.");
                } else if (hasAge && !hasRole) {
                    console.log("Mission failure: New aquisition is missing role data.");
                } else {
                    console.log("Mission failure: New aquisition is missing age and role data.");
                }
                break;

                // case to... read piece of info, have it match to report field
            case 'Corrupt File Resync': 
                const manager = employees.find(employee => employee.fullname === "Vera Stone");
                const correctFile = manager.files.includes("key-file.pdf");
                const matchReport = missionFormData.report === "key-file.pdf";

                if (correctFile && matchReport) {
                    console.log("Mission success: Corrupted file has been resynced with the database and restored.");
                } else {
                    console.log("Mission failure: The report does not match the file in the database.");
                }
                break;

                // case to delete virus

                //TODO: if all missions completed... sign out?


            default:
                console.log("Unknown mission. Verify mission parameters.");
        }
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // check mission completion(pass mission formData to use info)
        checkMission(props.mission.title);
        // if yes show success msg, and continue below
        // database call for what exists on backend to compare
        // await userService.editMission(user._id, missionId, {
        //     ...missionFormData,
        //     isCompleted: false,
        // });
        // navigate to completion message component (success or fail)
        navigate('/missions');
        // if no, fail msg
    };

    return (
        <>
            <h3>submit report</h3>
            { }
            <form>
                <textarea
                    name='report'
                    id='report-input'
                    value={missionFormData.report}
                    onChange={handleupdateReport}
                ></textarea>
                <br />
                <button
                    type='submit'
                    disabled={!missionFormData.report.length > 0}
                    onClick={handleSubmit}
                >
                    submit
                </button>
            </form>
        </>
    );

};

export default MissionForm