import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import * as userService from '../../services/userService'
import { UserContext } from "../../contexts/UserContext";
import MissionForm from "../MissionForm/MissionForm";
import NavBar from "../NavBar/NavBar";

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
        <>
            <NavBar target={'mission-control'}></NavBar>
            <main>
                <header className="typewriter">{mission._id}</header>
                <br />
                <h3>{mission.title}</h3>
                <br />
                <p>completed: {`${mission.isCompleted}`}</p>
                <p>description: {mission.description}</p>
                {mission.report
                    ? <p>report: {mission.report}</p>
                    : <MissionForm mission={mission} />}
            </main>
        </>
    );
};

export default MissionDetails