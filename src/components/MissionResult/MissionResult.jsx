import { useLocation, Link } from "react-router";

const MissionResult = () => {
    // Get the current location object which holds the result message
    const location = useLocation();
    // access that state passed by navigate method
    const msg = location.state?.msg;
    const mission = location.state?.mission;
    const description = location.state?.description;

    console.log(mission);
    console.log(msg);

    if (!mission) return <main>Loading...</main>

    return (
        <main>
            <h2>{msg}</h2>
            <h3>{mission}</h3>
            <p>{description}</p>
            <Link to="/missions"><button>Back to Missions</button></Link>
        </main>
    );
}

export default MissionResult;