const MissionList = (props) => {

    return (
        <main>
            <h2>missions</h2>
            <ul>
                {props.missions.map((mission) => (
                    <li key={mission._id}>{mission.title}</li>
                ))}
            </ul>
        </main>
    );
};

export default MissionList