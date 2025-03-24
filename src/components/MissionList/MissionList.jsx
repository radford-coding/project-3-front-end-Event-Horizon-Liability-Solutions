import { NavLink } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as userService from '../../services/userService';
import NavBar from '../NavBar/NavBar';

const MissionList = () => {

    const { user } = useContext(UserContext);
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        const fetchMissions = async () => {
            const fetchedMissions = await userService.missionList(user._id);
            setMissions(fetchedMissions);
        }
        fetchMissions();
    }, [user]);

    return (
        <>
            <NavBar target={'dashboard'}></NavBar>
            <main>
                <header>missions</header>
                <section>
                    <ul>
                        {missions.filter(m => !m.isCompleted).map((mission) => (
                            <NavLink key={mission._id} to={`/missions/${mission._id}`}>
                                <li>{mission.title}</li>
                            </NavLink>
                        ))}
                    </ul>
                </section>
                <br />
                <br />
                <header>completed</header>
                <section>
                    <ul>
                        {missions.filter(m => m.isCompleted).map((mission) => (
                            <NavLink key={mission._id} to={`/missions/${mission._id}`}>
                                <li>{mission.title}</li>
                            </NavLink>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default MissionList