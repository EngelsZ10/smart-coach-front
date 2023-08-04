export const handleLogout = (navigate) => {
  // Clear the username from localStorage when the user logs out
  localStorage.removeItem("credenciales");
  localStorage.removeItem("adminStatus");
};
