# Event Horizon Liability Solutions

You've been hired as a security consultant at Event Horizon Liability Solutions, a large interstellar company.

----------------

## to-dos

- [ ] plan gameplay views for each route
- [ ] define mission requirements & descriptions
- [ ] add logic for checking whether a mission is completed
- [ ] conditionally render the list of missions? to make a flow for gameplay?


----------------

### EE roles
- Corporate & Legal Roles (The Suits)
    - Celestial Risk Assessor – Evaluates the "acceptable" dangers of a mining operation or exoplanet colony (probably underestimates them to avoid payouts).
    - Interstellar Claims Adjuster – Determines whether an insurance claim is valid (spoiler: it rarely is).
    - Void Contract Analyst – Drafts contracts with legal loopholes that ensure the company never takes a loss.
    - Liability Strategist – Designs policies that shift blame onto the insured parties in case of "unfortunate incidents."
    - Corporate Ethics Consultant – A formality; their job is to make things look ethical while ensuring maximum profit.
- Exploration & Mining Insurance (The Field Agents)
    - Hazard Clearance Coordinator – Declares unstable planets or asteroid belts "safe enough" for insured operations (even when they aren't).
    - Extraction Asset Auditor – Tracks mining equipment and personnel to determine insurance payouts (usually undervalues both).
    - Planetary Underwriting Specialist – Assesses the viability of covering a new colony or mining site (and how much they can get away with charging).
    - Disaster Response Negotiator – Sent in after a catastrophe to determine how much (if anything) the company will pay.
    - GravWell Actuary – Specializes in risk assessment for high-gravity environments (hint: it’s always risky, but they’ll sell you a policy anyway).
- Security & Enforcement (The Cleanup Crew)
    - Policy Enforcement Officer – Ensures that insured parties comply with their contracts, by any means necessary.
    - Asset Recovery Specialist – Retrieves company property from failed missions, sometimes leaving the crew behind.
    - Quantum Risk Mitigation Unit – Handles "classified" insurance risks, which may involve sabotage, cover-ups, or making problems disappear.
    - ExoLegal Compliance Officer – Ensures clients meet their contract obligations (or suffer consequences).
    - Event Horizon Incident Containment Operative – Cleans up "unfortunate accidents" and ensures no information leaks.

## Route definitions

| HTTP Method              | controller | Response | URI | Use Case |
| :----------------:       | :------:    | :----:  | :---- | :---- |
| POST        |   auth   | 201 |  /auth/sign-up |  register and create a new user  |
| POST        |   auth   | 200 |  /auth/sign-in |  log in  |
| GET | users | 200 | /users | get all users |
| GET | users | 200 | /users/:userId | get a user's details |
| PUT | users | 200 | /users/:userId | update a user's details |
| DELETE | users | 200 | /users/:userId | delete a user account |
| GET | users | 200 | /users/:userId/employees | get index of employees |
| POST | users | 201 | /users/:userId/employees | create new employee |
| GET | users | 200 | /users/:userId/employees/:employeeId | get one employee's details |
| PUT | users | 200 | /users/:userId/employees/:employeeId | edit an employee |
| DELETE | users | 200 | /users/:userId/employees/:employeeId | delete an employee |
| GET | users | 200 | /users/:userId/missions/ | get index of missions |
| GET | users | 200 | /users/:userId/missions/:missionId | get one mission's details |
| PUT | users | 200 | /users/:userId/missions/:missionId | edit an mission |


<!-- | POST | users | 201 | /users/:userId/missions/ | create new mission | -->
<!-- | DELETE | users | 200 | /users/:userId/missions/:missionId | delete an mission | -->