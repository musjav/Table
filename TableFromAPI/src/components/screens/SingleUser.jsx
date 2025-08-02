// SingleUser.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import axios from 'axios';

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});


    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

  if (!user.id) return <Typography p={3}>Loading...</Typography>;

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={user.image} sx={{ width: 64, height: 64, mr: 2 }} />
          <Typography variant="h5">{user.name} {user.username}</Typography>
        </Box>

        <Typography>Email: {user.email}</Typography>
        <Typography>Username: {user.username}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        {/* <Typography>Address: {user.address.address}, {user.address.city}, {user.address.country}</Typography> */}
        <Typography>Company: {user.address?.street},{user.address?.city}</Typography>
      </Paper>
    </Box>
  );
};

export default SingleUser;
