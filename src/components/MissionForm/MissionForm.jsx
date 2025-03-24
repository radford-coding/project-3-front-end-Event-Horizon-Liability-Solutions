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
    const checkMission = (missionTitle) => {
        let result = {};
  
        switch (missionTitle) {
            // "delete" (update) a file
            case 'Log Purge': {
                const targetFile = employees.find(employee =>
                    employee.files.includes('colony-incident-log.json')
                );

                if (!targetFile) {
                    result = {
                        hasSucceeded: true,
                        msg: "Mission success: Found and removed file."
                    }
                } else {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failed: File still exists."
                    }
                }
                break;
            }

            // delete the imposter employee
            case 'Imposter Removal': {
                const targetEmployee = employees.find(employee =>
                    employee.fullname === "Xalex'Thira-Zar'Nex"
                );

                if (!targetEmployee) {
                    result = {
                        hasSucceeded: true,
                        msg: "Mission success: Imposter has been removed."
                    }
                } else {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failed: Imposter still exists in the system."
                    }
                }
                break;
            }

            // update an employee bc promotion
            case 'Promotion System Update': {
                // Find Zane Ortega specifically
                const promotedEmployee = employees.find(employee => employee.fullname === "Ortega, Zane");

                const promotion = promotedEmployee && promotedEmployee.role === "Space Habitat Manager";
                const permission = promotedEmployee && promotedEmployee.permissions.includes('manage-files');

                if (promotion && permission) {
                    result = {
                        hasSucceeded: true,
                        msg: "Mission success: Zane Ortega's role and permissions updated."
                    }
                } else if (promotion && !permission) {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: Zane Ortega's permissions not updated."
                    }
                } else if (!promotion && permission) {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: Zane Ortega's role not updated."
                    }
                } else {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: Zane Ortega's role and permissions not updated."
                    }
                }
                break;
            }

            // create an employee
            case 'New Aquisition': {
                const newEmployee = employees.find(employee => employee.fullname === "Voss, Ariella");
                const hasAge = newEmployee && newEmployee.age === 29; 
                const hasRole = newEmployee && newEmployee.role === 'Astrobiologist';

                if (hasAge && hasRole) {
                    result = {
                        hasSucceeded: true,
                        msg: "Mission success: New aquisition added to the database with age and role."
                    }
                } else if (!hasAge && hasRole) {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: New acquisition is missing age data."
                    }
                } else if (hasAge && !hasRole) {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: New aquisition is missing role data."
                    }
                } else {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: New aquisition is missing age and role data."
                    }
                }
                break;
            }

            // case to... read piece of info, have it match to report field
            case 'Corrupt File Resync': {
                const manager = employees.find(employee => employee.fullname === "Stone, Vera");
                const correctFile = manager.files.includes("key-file.pdf");
                const matchReport = missionFormData.report === "key-file.pdf";

                if (correctFile && matchReport) {
                    result = {
                        hasSucceeded: true,
                        msg: "Mission success: Corrupted file has been resynced with the database and restored."
                    }
                } else {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: The report does not match the file in the database."
                    }
                }
                break;
            }

            // case to delete virus
            case 'Remove Virus Infiltration': {
                const virus = employees.find(employee => employee.files.includes("virus.exe"));

                if (!virus) {
                    result = {
                        hasSucceeded: true,
                        msg: "Mission success: The virus has been removed from the system."
                    }
                } else {
                    result = {
                        hasSucceeded: false,
                        msg: "Mission failure: The system still detects a virus in the database."
                    }
                }
                break;
            }

            default: {
                result = {
                    hasSucceeded: false,
                    msg: "Unknown mission. Verify mission parameters."
                }
            }
        }

        return result;
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        // check mission completion and pull result from it
        const result = checkMission(props.mission.title);

        // if checkMission returns hasSucceeded: true, set mission to isCompleted: true 
        if (result.hasSucceeded) {
            await userService.editMission(user._id, missionId, {
                ...missionFormData,
                isCompleted: true,
            });
        }

        // navigate to missionresult component
        // pass the message through the navigate function's state property
        // the state property is stored in the location state and can contain any data you want to pass
        navigate('/missionresult', { state: { msg: result.msg, mission: props.mission.title, description: props.mission.description, id: missionId } });
    };

    return (
        <>
            <p>submit_report:</p>
            <form>
                <textarea
                    name='report'
                    id='report-input'
                    value={missionFormData.report}
                    onChange={handleupdateReport}
                ></textarea>
                <br />
                <div className="button-container">
                    <button
                        type='submit'
                        disabled={!missionFormData.report.length > 0}
                        onClick={handleSubmit}
                    >
                        submit
                    </button>
                </div>
            </form>
        </>
    );

};

export default MissionForm