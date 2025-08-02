import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
    let [createUserData, setCreateUserData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: {
            "street": "",
            "city": "",
        }
            
    });

    const navigate = useNavigate();

    const createUser = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/user", createUserData)
            .then(() => {
                alert("create USER Successfully");
                navigate("/");

            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={createUser}>
            <Paper elevation={24} sx={{ margin: 10, padding: 3 }}>
                <Typography sx={{ marginBottom: 3 }} variant="h5">
                    Create User
                </Typography>

                <TextField
                    required
                    onChange={(e) =>
                        setCreateUserData({ ...createUserData, name: e.target.value })
                    }
                    sx={{ marginBottom: 3 }}
                    label="Enter name"
                    fullWidth
                />
                <TextField
                    required

                    onChange={(e) =>
                        setCreateUserData({ ...createUserData, username: e.target.value })
                    }
                    sx={{ marginBottom: 3 }}
                    label="Enter Username"
                    fullWidth
                />

                <TextField
                    required
                    type="email"
                    onChange={(e) =>
                        setCreateUserData({ ...createUserData, email: e.target.value })
                    }
                    sx={{ marginBottom: 3 }}
                    label="Enter Email"
                    fullWidth
                />

                <TextField
                    required

                    onChange={(e) =>
                        setCreateUserData({ ...createUserData, address: { ...createUserData.address, street: e.target.value } })
                    }
                    sx={{ marginBottom: 3 }}
                    label="Enter Street"
                    fullWidth
                />
                <TextField
                    required

                    onChange={(e) =>
                        setCreateUserData({ ...createUserData, address: { ...createUserData.address, city: e.target.value } })
                    }
                    sx={{ marginBottom: 3 }}
                    label="Enter City"
                    fullWidth
                />

                <TextField
                    required
                    type="phone"
                    onChange={(e) =>
                        setCreateUserData({ ...createUserData, phone: e.target.value })
                    }
                    sx={{ marginBottom: 3 }}
                    label="Enter Phone"
                    fullWidth
                />

                <Button type="submit" variant="contained">
                    Create User
                </Button>
            </Paper>
        </form>
    );
};

export default CreateUser;