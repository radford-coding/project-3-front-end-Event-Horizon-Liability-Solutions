import { useLocation, Link } from "react-router";
import NavBar from "../NavBar/NavBar";

const MissionResult = () => {
    // Get the current location object which holds the result message
    const location = useLocation();
    // access that state passed by navigate method
    const msg = location.state?.msg;
    const mission = location.state?.mission;
    const description = location.state?.description;
    const id = location.state?.id;
    const allMissionsCompleted = location.state?.allMissionsCompleted;

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setUser(null);
      };

    if (!mission) return <main>Loading...</main>

    return (
        <>
            <NavBar target={'mission-control'}></NavBar>
            <main>
                {allMissionsCompleted ? (
                    // if all missions completed, show the win message
                    <section>
                    <h1>-Incoming Transmission-</h1>
                    <p><em>Secure Line Established</em></p>
                    <br />
                    <p>
                        <strong>[UNKNOWN SOURCE]:</strong> <br />
                        We've been monitoring your progress closely. Your efficiency in executing tasks has exceeded our projections.  
                        Higher authorities are now aware of your capabilities. 
                    </p>
                    <br />
                    <p>
                        Further directives will be provided when the time is right.  
                        Until then, you are to terminate this connection and await further instructions.
                    </p>
                    <br />
                    <p><em>Connection Termination Protocol Engaged...</em></p>
                    <Link to='/' onClick={handleSignOut}><button>click here to terminate connection</button></Link>
                </section>
                ) : (
                    // otherwise show the default mission result
                    <>
                        <header>{id}</header>
                        <br />
                        <section>
                            <h4>{msg}</h4>
                            <br />
                            <br />
                            <h4>{mission}</h4>
                            <p>{description}</p>
                        </section>
                    </>
                )}
            </main>
        </>
    );
    
}

export default MissionResult;