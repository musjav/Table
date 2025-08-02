import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
    const [singleUserData, setSingleUserData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        address: {
            street: '',
            city: '',
        }
    });

    const navigate = useNavigate();

    console.log(id);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/user/${id}`)
            .then((response) => {
                setSingleUserData(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const editUser = () => {
        const { name, username, email, address, phone } = singleUserData;

        if (!name || !username || !email || !phone) {
            alert("Please fill all fields");
            return;
        }

        axios
            .put(`http://localhost:3000/user/${id}`, singleUserData)
            .then(() => {
                alert("Edit USER Successfully");
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });

    };

    return (

        <form>
            <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
                <Typography sx={{ marginBottom: 3 }} variant="h5">
                    Edit User
                </Typography>

                <TextField
                    onChange={(e) =>
                        setSingleUserData({ ...singleUserData, name: e.target.value })
                    }
                    variant="standard"
                    value={singleUserData.name}
                    label="Enter name"
                    fullWidth
                    sx={{ marginBottom: 3 }}
                    InputLabelProps={{
                        shrink: singleUserData.name !== '', // ✅ only show when value exists
                    }}
                />
                <TextField
                    onChange={(e) =>
                        setSingleUserData({ ...singleUserData, username: e.target.value })
                    }
                    variant="standard"
                    value={singleUserData.username}
                    sx={{ marginBottom: 3 }}
                    label="Enter Username"
                    fullWidth
                    InputLabelProps={{
                        shrink: singleUserData.username !== '', // ✅ only show when value exists
                    }}
                />

                <TextField
                    onChange={(e) =>
                        setSingleUserData({ ...singleUserData, email: e.target.value })
                    }
                    variant="standard"
                    value={singleUserData.email}
                    sx={{ marginBottom: 3 }}
                    label="Enter Email"
                    fullWidth
                    InputLabelProps={{
                        shrink: singleUserData.email !== '', // ✅ only show when value exists
                    }}
                />


                <TextField
                    required

                    onChange={(e) =>
                        setSingleUserData({ ...singleUserData, address: { ...singleUserData.address, street: e.target.value } })
                    }
                    value={singleUserData.address?.street}

                    sx={{ marginBottom: 3 }}
                    label="Enter Street"
                    fullWidth
                    InputLabelProps={{
                        shrink: singleUserData.address?.street !== '', // ✅ only show when value exists
                    }}
                />
                <TextField
                    required

                    onChange={(e) =>
                        setSingleUserData({ ...singleUserData, address: { ...singleUserData.address, city: e.target.value } })
                    }
                    value={singleUserData.address?.city}
                    sx={{ marginBottom: 3 }}
                    label="Enter City"
                    fullWidth
                    InputLabelProps={{
                        shrink: singleUserData.address?.city !== '', // ✅ only show when value exists
                    }}
                />

                <TextField
                    onChange={(e) =>
                        setSingleUserData({ ...singleUserData, phone: e.target.value })
                    }
                    variant="standard"
                    value={singleUserData.phone}
                    sx={{ marginBottom: 3 }}
                    label="Enter Phone"
                    fullWidth
                    InputLabelProps={{
                        shrink: singleUserData.phone !== '', // ✅ only show when value exists
                    }}
                />

                <Button onClick={editUser} color="error" variant="contained">
                    Edit User
                </Button>
            </Paper>
        </form>
    );
};

export default EditUser;