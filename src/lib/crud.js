// Module for users management

export function createUser(setUsers, newUser) {
  // Function for new user creation
  setUsers((prevUsers) => {
    const currentUserIds = prevUsers.map((user) => user.id);
    const newId = Math.max(...currentUserIds) + 1;
    newUser.id = newId;

    return [...prevUsers, newUser];
  });
}

export function retrieveUser(users, userId) {
  // Function for retrieving existing user
  return users.find((user) => Number(user.id) === Number(userId));
}

export function updateUser(setUsers, updatedUser) {
  // Function for updating existing user
  setUsers((prevUsers) =>
    prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
  );
}

export function deleteUser(setUsers, userId) {
  // Function for deleting existing user
  setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
}
