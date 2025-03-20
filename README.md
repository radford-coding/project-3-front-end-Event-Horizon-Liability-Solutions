# Event Horizon Liability Solutions


## Logo:
![Hacker](src/views/Logo.jpg)

## GitHub repository link:
[Back End](https://github.com/seradelarosa/EHLS-project-backend.git)
[Front End](https://github.com/radford-coding/project-3-front-end-Event-Horizon-Liability-Solutions.git)

## Trello link:
 https://trello.com/invite/67b8db92bac55d34a6014ba0/ATTI376446a5bb0db1e7318662ca6ccc7c13232CEA52

## Deployed:
[Back end](https://event-horizon-liability-sol-6685ee1960ca.herokuapp.com)
[Front end] 

## Project Explanation:
"You've been hired as a security consultant at Event Horizon Liability Solutions, a large interstellar company."
The game "Event Horizon Liability Solutions" is an immersive experience set in a cyberpunk future, where players take on the role of cybersecurity and account management administrators in a futuristic mega-corporation. Players can create and manage employee profiles, assign tasks, and carry out missions related to data protection and corporate cybersecurity. The platform also allows the visualization of employees, the editing of their data and the deletion of accounts, providing a dynamic and management-oriented experience.

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

>## Technologies Used:
>>Front end: 
>>>React: For the development of the user interface and navigation in a SPA (Single Page Application).
>>>Context API: For the management of the global state of authentication and users.

>>Back End:
>>>Node.js and Express: For the server and the REST API.
>>> MongoDB and Mongoose: For data storage and management of users, employees and missions.
>>>JSON Web Tokens (JWT): For session management and secure authentication.
>>>LocalStorage: To store the session token in the browser.

## Next steps: 
1.	 Roles and Permissions System: Implement specific roles (administrator, manager, employee) to differentiate access levels and available functionalities.
2.	 Statistics and Progress: Add graphics and statistics on mission performance and player progress.
3.	 Real-Time Chat: Include a communication system to coordinate strategies between players.
4.	 Real-Time Notifications: Use WebSockets to show instant updates of mission changes or security alerts.
5.	 User Interface Improvements:
•	 More futuristic design according to the cyberpunk theme.
•	 Animations and transitions for a more engaging visual experience.
6.	 Integration of an Achievement System: Rewards and achievements when completing missions or managing employees efficiently.
7.	 Multiplayer Mode: Ability to collaborate or compete with other players in shared cybersecurity tasks.
=======
You've been hired as a security consultant at Event Horizon Liability Solutions, a large interstellar company.

