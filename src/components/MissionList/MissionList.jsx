import { NavLink } from "react-router";

const MissionList = (props) => {

    return (
        <main>
            <h2>missions</h2>
            <ul>
                {props.missions.map((mission) => (
                    <NavLink key={mission._id} to={`/missions/${mission._id}`}>
                        <li>{mission.title}</li>
                    </NavLink>
                ))}
            </ul>
        </main>
    );
};

export default MissionList