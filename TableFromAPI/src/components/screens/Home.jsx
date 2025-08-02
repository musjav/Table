import React, { useEffect, useState } from 'react';
import {
  Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton, Button,
  Typography, Box, Toolbar
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]); // ✅ Initialize as empty array
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        console.log("API Response:", response.data); // should be an array
        setUsers(response.data); // ✅ Directly set array
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const handleAllDelete = async () => {
  try {
    for (const user of users) {
      await axios.delete(`http://localhost:3000/user/${user.id}`);
      await delay(100); // 100ms delay to reduce load
    }
    setUsers([]);
    alert("All users deleted successfully");
  } catch (error) {
    console.error("Error deleting all users:", error.message);
  }
};


  const handleSingleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/user/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id)); // Update state to remove deleted user
        alert("User deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  }
  return (
    <Box p={3}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          bgcolor: '#3f5c7c',
          color: '#fff',
          borderRadius: 2,
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Manage <span style={{ color: '#fff' }}>Employees</span>
        </Typography>
        <Box>
          <Button
            onClick={handleAllDelete}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            sx={{ mr: { xs: 0, sm: 2 }, mb: { xs: 1, sm: 0 } }}
          >
            Delete
          </Button>
          <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={() => navigate('/createUser')}>
            Add New Employee
          </Button>
        </Box>
      </Toolbar>

      <Box sx={{ overflowX: 'auto', mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(Array.isArray(users) ? users : []).map((user) => (
              // <TableRow
              //   key={user.id}
              //   hover
              //   onClick={() => navigate(`/user/${user.id}`)}

              //   sx={{ cursor: 'pointer' }}
              // >

              //   <TableCell>
              //     <Checkbox />
              //   </TableCell>
              //   <TableCell>{user.name} {user.username}</TableCell>
              //   <TableCell>{user.email}</TableCell>
              //   <TableCell>
              //     {user.address?.street}, {user.address?.city}
              //   </TableCell>
              //   <TableCell>{user.phone}</TableCell>
              //   <TableCell>

              //     <IconButton
              //       size="small"
              //       onClick={() => navigate(`/editUser/${user.id}`)} // ✅ Moved to IconButton
              //     >
              //       <EditIcon />
              //     </IconButton>
              //     <IconButton
              //       size="small"
              //       color="error"
              //       onClick={() => handleSingleDelete(user.id)} // ✅ Already correct
              //     >
              //       <DeleteIcon />
              //     </IconButton>

              //   </TableCell>
              // </TableRow>
              <TableRow
                key={user.id}
                hover
                onClick={() => navigate(`/user/${user.id}`)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell>
                  <Checkbox onClick={(e) => e.stopPropagation()} />
                </TableCell>
                <TableCell>{user.name} {user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address?.street}, {user.address?.city}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/editUser/${user.id}`);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSingleDelete(user.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>

            ))}
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
export default Home;
