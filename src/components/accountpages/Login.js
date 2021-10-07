import {
    makeStyles,
    TextField,
    Typography,
    Button,
    Grid,
    Link,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import PropTypes from "prop-types";
import React, { Component } from 'react'
import useState from 'react';
import ForgotPass from './ForgotPass';


const useStyles = makeStyles({
    root: {
        background: 'primary'
    },

    button: {
        display: 'flex',
        marginTop: 20,
        minWidth: 100,
    },
    containerLogin: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 200,

    },
    title: {
        marginTop: -150,
        marginBottom: 50,
    },
    textfield: {
        margin: 10,
    },
})

function Login({ history }) {
    const classes = useStyles();


    return (
        <div className={classes.containerLogin}>
            <div className={classes.title}>
                <Typography variant="h3">
                    Login MaDude
                </Typography>
            </div>
            <div id="login-information">
                <Grid xs={8}
                    justifyContent="center"
                >
                    <TextField placeholder="E-mail Address"
                        id="e-mail"
                        className={classes.textfield} />
                    <TextField
                        placeholder="Password"
                        id="password"
                        className={classes.textfield} >
                    </TextField>

                    <div>
                        <Button variant="contained"
                            color="secondary"
                            className={classes.button}
                            type="submit"> Login </Button>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />  
                    </div>
                    <Link href="/forgotPass" variant="body2">
                        Forgot Password?
                    </Link>
                    <div>
                        <Link href="/register" variant="6">
                            Don't Have an account yet? Sign-Up
                        </Link>
                    </div>
                </Grid>
            </div>


        </div>
    )


}

export default Login