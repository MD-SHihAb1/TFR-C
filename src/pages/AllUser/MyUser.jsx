import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Loader from '../Lodder/Loader';

const MyUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Function to update user role to admin
  const handleMakeAdmin = async (userId) => {
    // Show a confirmation dialog before making admin
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You want to make this user an admin!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, make admin!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/users/${userId}/role`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ role: 'admin' }), // Role to update
        });

        if (!response.ok) {
          throw new Error('Failed to update user role');
        }

        // Show success confirmation
        Swal.fire('Success', 'User role updated to admin', 'success');

        // Re-fetch users after updating
        setLoading(true);
        const res = await fetch('http://localhost:5000/users');
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  // Function to delete a user
  const handleDeleteUser = async (userId) => {
    // Show a confirmation dialog before deleting the user
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete user!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/users/${userId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete user');
        }

        // Show success confirmation
        Swal.fire('Deleted!', 'User deleted successfully.', 'success');

        // Re-fetch users after deletion
        setLoading(true);
        const res = await fetch('http://localhost:5000/users');
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  // If loading, show a loading message
  if (loading) {
    return <div><Loader></Loader></div>;
  }

  // If there was an error, show the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="users-list container mx-auto py-8">
      <h1 className="text-center text-3xl font-semibold mb-6">All Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="card bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Role: {user.role}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleMakeAdmin(user._id)}
                className="btn btn-primary"
              >
                Make Admin
              </button>
              <button
                onClick={() => handleDeleteUser(user._id)}
                className="btn btn-danger"
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyUser;
