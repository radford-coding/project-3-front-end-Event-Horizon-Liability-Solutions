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

    useEffect( () => {
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