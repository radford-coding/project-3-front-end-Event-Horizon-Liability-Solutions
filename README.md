# Event Horizon Liability Solutions


## Logo:
![Hacker](src/views/Logo.jpg)

## GitHub repository link:
[Back End](https://github.com/seradelarosa/EHLS-project-backend.git)
[Front End](https://github.com/radford-coding/project-3-front-end-Event-Horizon-Liability-Solutions.git)

## Trello link:
[planning board](https://trello.com/invite/67b8db92bac55d34a6014ba0/ATTI376446a5bb0db1e7318662ca6ccc7c13232CEA52)

## Deployed:
[Front end](https://event-horizon-liability-solutions.netlify.app/)
[Back end](https://event-horizon-liability-sol-6685ee1960ca.herokuapp.com)

## Project Explanation:
"You've been hired as a security consultant at Event Horizon Liability Solutions, a large interstellar company."
The game "Event Horizon Liability Solutions" is an immersive experience set in a cyberpunk future, where players take on the role of cybersecurity and account management administrators in a futuristic mega-corporation. Players can create and manage employee profiles, assign tasks, and carry out missions related to data protection and corporate cybersecurity. The platform also allows the visualization of employees, the editing of their data and the deletion of accounts, providing a dynamic and management-oriented experience.

----------------

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

## Technologies Used:
* Front end: 
    * React: For the development of the user interface and navigation in a SPA (Single Page Application).
    * Context API: For the management of the global state of authentication and users.

* Back End:
    * Node.js and Express: For the server and the REST API.
    *  MongoDB and Mongoose: For data storage and management of users, employees and missions.
    * JSON Web Tokens (JWT): For session management and secure authentication.
    * : To store the session token in the browser.

## Next steps: 
1.	 Roles and Permissions System: Implement specific roles (administrator, manager, employee) to differentiate access levels and available functionalities.
2.	 Statistics and Progress: Add graphics and statistics on mission performance and player progress.
3.	 Real-Time Chat: Include a communication system to coordinate strategies between players.
4.	 Real-Time Notifications: Use WebSockets to show instant updates of mission changes or security alerts.
5.	 User Interface Improvements:
    * More futuristic design according to the cyberpunk theme.
    * Animations and transitions for a more engaging visual experience.
6.	 Integration of an Achievement System: Rewards and achievements when completing missions or managing employees efficiently.
7.	 Multiplayer Mode: Ability to collaborate or compete with other players in shared cybersecurity tasks.

