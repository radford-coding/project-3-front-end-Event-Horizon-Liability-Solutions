import { useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";

const MissionResult = () => {
    // Get the current location object which holds the result message
    const location = useLocation();
    // access that state passed by navigate method
    const msg = location.state?.msg;
    const mission = location.state?.mission;
    const description = location.state?.description;
    const id = location.state?.id;

    if (!mission) return <main>Loading...</main>

    return (
        <>
            <NavBar target={'mission-control'}></NavBar>
            <main>
                <header>{id}</header>
                <br />
                <section>
                    <h4>{msg}</h4>
                    <br />
                    <br />
                    <h4>{mission}</h4>
                    <p>{description}</p>
                </section>
            </main>
        </>
    );
}

export default MissionResult;