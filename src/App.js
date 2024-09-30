import './App.css';
import React, { useState } from "react";
import UserTable from "./UserTable";  // Import the table component

function App() {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]); // Array to store multiple user data

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Only add user if all fields are filled
    if (name && age && email) {
      const newUser = { name, age, email };
      setUsers([...users, newUser]); // Add new user to the existing list

      // Clear input fields after submitting
      setName('');
      setAge('');
      setEmail('');
    }
  };

  return (
    <div className="app-container">
      {/* Form on the left side */}
      <div className="form-container">
        <h2>Enter User Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Table to display all user data on the right side */}
      <div className="user-table-container">
        {users.length > 0 ? (
          <UserTable users={users} />
        ) : (
          <p>No user data submitted yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
