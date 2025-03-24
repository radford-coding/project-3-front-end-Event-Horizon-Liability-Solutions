import './OrgChart.css';
import NavBar from '../NavBar/NavBar';

import { NavLink } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import * as userService from '../../services/userService';

const org = {
    execs: [
        'Void Contract Analyst',
        'Celestial Risk Assessor',
        'Terraforming Strategist'
    ],
    agents: [
        'GravWell Actuary',
        'Black Hole Data Analyst',
        'Solar Flare Analyst',
        'Interstellar Supply Coordinator',
        'Operational Efficiency Manager',
        'Quantum Risk Mitigation Unit',
    ],
    experts: [
        'Quantum Network Engineer',
        'Space Habitat Maintenance',
        'Disaster Response Negotiator',
        'Asset Recovery Specialist',
        'Meteor Impact Specialist',
        'Lunar Excavation Supervisor',
    ],
};

const OrgChart = () => {

    const { user } = useContext(UserContext);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const fetchedEmployees = await userService.employeeList(user._id);
            const sortedEmployees = fetchedEmployees.sort((a, b) =>
                a.fullname.localeCompare(b.fullname)
            );
            setEmployees(sortedEmployees);
        };
        fetchEmployees();
    }, [user]);

    return (
        <>
            <NavBar target={'company-resources'}></NavBar>
            <main>
                <header>org_chart</header>
                <br />
                <div>
                    select a role to view that employee
                </div>
                <br />
            </main>
            <div className="org">
                <div>Event Horizon Liability Solutions</div>
                {employees.length
                    ? <div>
                        {Object.keys(org).map((key, index) => (
                            <div key={index}>
                                <header className='org-group'>{key}</header>
                                {org[key].map((role, index) => (
                                    <div key={index}>
                                        {employees.find(e => e.role === role) ? <NavLink to={`/employees/${employees.find(e => e.role === role)._id}`}>{role}</NavLink> : role}
                                    </div>
                                ))}
                            </div>))}
                    </div>
                    : 'Loading...'}
            </div>
        </>
    );
};

export default OrgChart