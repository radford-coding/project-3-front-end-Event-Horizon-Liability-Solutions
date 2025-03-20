import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import * as userService from '../../services/userService'
import { UserContext } from "../../contexts/UserContext";

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

    // console.log('mission:', mission);

    if (!mission) return <main>Loading...</main>

    return (
        <main>
            <h2>{mission.title}</h2>
            <p>{mission.description}</p>
        </main>
    );
};

export default MissionDetails