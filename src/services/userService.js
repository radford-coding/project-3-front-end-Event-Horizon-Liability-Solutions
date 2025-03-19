const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

// GET /users - view all players
const playerList = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    };

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// PUT /users/:userId - update a player's information
const updatePlayer = async (playerId, playerFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// DELETE /users/:userId - delete a player account - needs to also log out
// const deletePlayer = async (playerId) => {
//   try {
//     const res = await fetch(`${BASE_URL}/${playerId}`, {
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//       },
//     });
//     return res.json();
//   } catch (err) {
//     console.log(err);
//     throw new Error(err);
//   };
// };

// GET /users/:userId/employees - view all employees
const employeeList = async (playerId) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/employees`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    };
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// POST /users/:userId/employees - add a new employee
const createEmployee = async (playerId, employeeFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/employees`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// GET /users/:userId/employees/:employeeId - view one employee's details
const employeeDetails = async (playerId, employeeId) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/employees/${employeeId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    };
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// PUT /users/:userId/employees/:employeeId - edit an employee (or delete/add to their permissions or files)
const editEmployee = async (playerId, employeeId, employeeFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/employees/${employeeId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// DELETE /users/:userId/employees/:employeeId - delete an entire employee
const deleteEmployee = async (playerId, employeeId) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/employees/${employeeId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// GET /users/:userId/missions - view all missions
const missionList = async (playerId) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/missions`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    };
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// GET /users/:userId/missions/:missionId - view a mission's details
const missionDetails = async (playerId, missionId) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/missions/${missionId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    };
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

// PUT /users/:userId/missions/:missionId - update a mission
const editMission = async (playerId, missionId, missionFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${playerId}/employees/${missionId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(missionFormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error(err);
  };
};

export {
  playerList,
  updatePlayer,
  // deletePlayer,
  employeeList,
  createEmployee,
  employeeDetails,
  editEmployee,
  deleteEmployee,
  missionList,
  missionDetails,
  editMission,
};