import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import SingleUser from './components/screens/SingleUser';

const App = () => {
  console.log('App component rendered');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<SingleUser />} />
      </Routes>
      
    </>
  );
};

export default App;


// Home.jsx
// import React, { useEffect, useState } from 'react';
// import {
//   Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton, Button,
//   Typography, Box, Toolbar
// } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import AddIcon from '@mui/icons-material/PersonAdd';
// import { useNavigate } from 'react-router-dom';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('https://dummyjson.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data.users));
//   }, []);

//   return (
//     <Box p={3}>
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#3f5c7c', color: '#fff', borderRadius: 2 }}>
//         <Typography variant="h5" fontWeight="bold">
//           Manage <span style={{ color: '#fff' }}>Employees</span>
//         </Typography>
//         <Box>
//           <Button variant="contained" color="error" startIcon={<DeleteIcon />} sx={{ mr: 2 }}>
//             Delete
//           </Button>
//           <Button variant="contained" color="success" startIcon={<AddIcon />}>
//             Add New Employee
//           </Button>
//         </Box>
//       </Toolbar>

//       <Table sx={{ mt: 2 }} size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell padding="checkbox"><Checkbox /></TableCell>
//             <TableCell><b>Name</b></TableCell>
//             <TableCell><b>Email</b></TableCell>
//             <TableCell><b>Address</b></TableCell>
//             <TableCell><b>Phone</b></TableCell>
//             <TableCell><b>Actions</b></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {users.map(user => (
//             <TableRow key={user.id} hover onClick={() => navigate(`/user/${user.id}`)} sx={{ cursor: 'pointer' }}>
//               <TableCell><Checkbox /></TableCell>
//               <TableCell>{user.firstName} {user.lastName}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>{user.address.address}, {user.address.city}, {user.address.country}</TableCell>
//               <TableCell>{user.phone}</TableCell>
//               <TableCell>
//                 <IconButton size="small" onClick={(e) => e.stopPropagation()}>
//                   <EditIcon />
//                 </IconButton>
//                 <IconButton size="small" color="error" onClick={(e) => e.stopPropagation()}>
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Box>
//   );
// };

// export default App;
    