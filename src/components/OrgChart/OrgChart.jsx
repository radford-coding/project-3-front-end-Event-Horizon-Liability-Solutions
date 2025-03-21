import './OrgChart.css';
import NavBar from '../NavBar/NavBar';

const OrgChart = () => {


    return (
        <>
            <NavBar target={'dashboard'}></NavBar>
            <main>
                <h1>Org Chart</h1>
                <br />
                <div className="org">
                    <div>Event Horizon Liability Solutions</div>
                    <div>
                        <div>
                            <header className="org-group">C-Suite</header>
                            <div>Celestial Risk Assessor</div>
                            <div>Void Contract Analyst</div>
                        </div>
                        <div>
                            <header className="org-group">Field Agents</header>
                            <div>GravWell Actuary</div>
                            <div>Disaster Response Negotiator</div>
                        </div>
                        <div>
                            <header className="org-group">Security</header>
                            <div>Quantum Risk Mitigation Unit</div>
                            <div>Asset Recovery Specialist</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default OrgChart