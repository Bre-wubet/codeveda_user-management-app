import React, { useEffect, useState } from "react";
import { getAllUsers, deleteUser, updateUser } from "../../services/userService";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      // Map _id to id for consistency
      setUsers(users.map(user => ({ ...user, id: user._id })));
      setLoading(false);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleEdit = async (userId) => {
    await updateUser(userId, { isAdmin: true });
    setUsers(users.map((user) => user.id === userId ? { ...user, isAdmin: true } : user));
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="animate-pulse text-indigo-600 text-xl font-semibold">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 p-4 md:p-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-500">
                  <th className="text-left text-white font-semibold px-6 py-4">Name</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Email</th>
                  <th className="text-left text-white font-semibold px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-indigo-50/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-gray-800">{user.username}</td>
                    <td className="px-6 py-4 text-gray-800">{user.email}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default UserList;
