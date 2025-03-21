# Event Horizon Liability Solutions

## Logo:
![Hacker](src/views/Logo.jpg)

## GitHub repository link:
[Back End](https://github.com/seradelarosa/EHLS-project-backend.git)
[Front End](https://github.com/radford-coding/project-3-front-end-Event-Horizon-Liability-Solutions.git)

## Trello link:
[planning board](https://trello.com/b/67IfCuDU/project-3-mern-stack-crud-cyberpunk-hacking-game)

## Deployed:
[Front end](https://event-horizon-liability-solutions.netlify.app/)
[Back end](https://event-horizon-liability-sol-6685ee1960ca.herokuapp.com)

## Project Explanation:
"You've been hired as a security consultant at Event Horizon Liability Solutions, a large interstellar company."
The game "Event Horizon Liability Solutions" is an immersive experience set in a cyberpunk future, where players take on the role of cybersecurity and account management administrators in a futuristic mega-corporation. Players can create and manage employee profiles, assign tasks, and carry out missions related to data protection and corporate cybersecurity. The platform also allows the visualization of employees, the editing of their data and the deletion of accounts, providing a dynamic and management-oriented experience.

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

## Feasibility of portability to React Native

* Porting the application to React Native is feasible, since component logic and state management in React can be easily moved. However, some challenges include:

* *Navigation: Instead of using React Router, React Navigation would be used.

* User Interface: Interface components such as buttons and forms must be adapted to the mobile environment using native components such as View, Text, and TouchableOpacity.

* Local Storage: Local storage on mobile devices is typically handled with libraries such as AsyncStorage.

* API services: Communication with the backend will continue to be with fetch or axios, but adjustments in the management of routes may be required.

