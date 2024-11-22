import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SellerApproved = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('pending');

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users`, {
        params: { status: filter },
      });
      setUsers(response.data);
    } catch (error) {
      toast.error('Error fetching users');
    }
  };

  const approveUser = async (id) => {
    try {
      await axios.put(`http://localhost:5000/users/approve/${id}`);
      toast.success('User approved successfully');
      fetchUsers();
    } catch (error) {
      toast.error('Error approving user');
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      toast.success('User deleted successfully');
      fetchUsers();
    } catch (error) {
      toast.error('Error deleting user');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Seller Management</h1>
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2 text-lg">Filter by Status:</label>
        <select
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border p-2 rounded"
        >
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="">All</option>
        </select>
      </div>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">
                {user.status === 'pending' && (
                  <>
                    <button
                      onClick={() => approveUser(user._id)}
                      className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerApproved;
