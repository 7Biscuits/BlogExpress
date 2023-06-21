const fetchUserByUsername = async (username) => {
  const response = await fetch(
    `http://localhost:8080/users/username/${username}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
};

const fetchUserById = async (userId) => {
  const response = await fetch(`http://localhost:8080/users/id/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

module.exports = {
  fetchUserById,
  fetchUserByUsername,
};
