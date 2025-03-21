import './MissionList.css';
import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from '../../services/userService';

const MissionList = () => {

    const { user } = useContext(UserContext);
    const [missions, setMissions] = useState([]);

    useEffect( () => {
        const fetchMissions = async () => {
            const fetchedMissions = await userService.missionList(user._id);
            setMissions(fetchedMissions);
        }
        fetchMissions();
    }, [user]);

    return (
        <main>
            <h2>missions</h2>
            <ul>
                {missions.filter(m => !m.isCompleted).map((mission) => (
                    <NavLink key={mission._id} to={`/missions/${mission._id}`}>
                        <li>{mission.title}</li>
                    </NavLink>
                ))}
            </ul>
            <h2>completed</h2>
            <ul>
                {missions.filter(m => m.isCompleted).map((mission) => (
                    <NavLink key={mission._id} to={`/missions/${mission._id}`}>
                        <li>{mission.title}</li>
                    </NavLink>
                ))}
            </ul>
        </main>
    );
};

export default MissionList