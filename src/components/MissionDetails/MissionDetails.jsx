import { useContext, useEffect, useState } from "react";
import './MissionDetails.css';
import { useParams } from "react-router";
import * as userService from '../../services/userService'
import { UserContext } from "../../contexts/UserContext";
import MissionForm from "../MissionForm/MissionForm";

const MissionDetails = () => {
    const { missionId } = useParams();
    const { user } = useContext(UserContext);
    const [mission, setMission] = useState(null);

    useEffect(() => {
        const fetchMission = async () => {
            const missionData = await userService.missionDetails(user._id, missionId);
            setMission(missionData);
        };
        fetchMission();
    }, [user, missionId]);

    if (!mission) return <main>Loading...</main>

    return (
        <main>
            <h2>{mission.title}</h2>
            <p>completed: {`${mission.isCompleted}`}</p>
            <p>{mission.description}</p>
            {mission.report
            ? <p>{mission.report}</p>
            : <MissionForm mission={mission} />}
           <button onClick={() => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      //props.handleDeleteEmployee(employeeId);
    }}}>Delete</button>
        </main>
    );
};

export default MissionDetails