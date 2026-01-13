import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserTable() {

    const [users, setUsers] = React.useState([])

    useEffect(() => {
        function getAllUsers() {
            axios.get("http://localhost:8085/api/v1/getUsers")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }

        getAllUsers();
    }, []);

    const deleteUser = (id) => {
        const confirmed = window.confirm(`Are you sure you want to delete user with ID ${id}?`);
        if (!confirmed) {
            return;
        }

        axios.delete(`http://localhost:8085/api/v1/deleteUser/${id}`)
        .then((res) => {
            alert("User deleted successfully");
            setUsers(users.filter(user => user.id !== id));
        })
        .catch((err) => {
            console.log(err);
            alert("Error deleting user");
        });
    }

  return (
    <div>

        <h2>User List</h2>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><Link to={`/updateUser/${user.id}`} className="action-btn btn-update">
                                Update
                            </Link>
                        </td>

                        <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default UserTable
