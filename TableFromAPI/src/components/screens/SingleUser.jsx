// SingleUser.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Avatar } from '@mui/material';

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <Typography p={3}>Loading...</Typography>;

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={user.image} sx={{ width: 64, height: 64, mr: 2 }} />
          <Typography variant="h5">{user.firstName} {user.lastName}</Typography>
        </Box>

        <Typography>Email: {user.email}</Typography>
        <Typography>Username: {user.username}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Address: {user.address.address}, {user.address.city}, {user.address.country}</Typography>
        <Typography>Company: {user.company.name}</Typography>
        <Typography>University: {user.university}</Typography>
        <Typography>Blood Group: {user.bloodGroup}</Typography>
        <Typography>Role: {user.role}</Typography>
      </Paper>
    </Box>
  );
};

export default SingleUser;
