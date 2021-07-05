import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './style.css'
import '@fontsource/roboto';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 400,
      },
    },
  }),
);


export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUser() {


        const res = fetch('http://localhost:1337/api/register', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }).then((t) => t.json())

        console.log(res)
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h3" align="center">
                Register
            </Typography>
            
            <form action="" className="register-fields">
                <TextField
                    fullWidth
                    placeholder="email@email.com"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                />
                <TextField
                fullWidth
                placeholder="Password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" onClick={registerUser}>
                    Register
                </Button>
            </form>

        </div>
    )
}