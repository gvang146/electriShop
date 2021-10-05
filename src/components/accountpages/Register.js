import {
    makeStyles,
    TextField,
    Typography,
    Button,
    Grid,
    Link,
    Toolbar,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@material-ui/core'
import { findByLabelText } from '@testing-library/dom';
import React from 'react'

const useStyles = makeStyles({
    root: {
        background: 'primary'
    },
    button: {
        display: 'flex',
        marginTop: 20,
        minWidth: 100,
    },
    containerRegister: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 200,

    },
    state: {
        marginRight: 40,
    },
    button: {
        marginTop: 5,
        minWidth: 100,
        color: "primary",
    }
})

function Register({ Register }) {
    const classes = useStyles();

    const [state, setState] = React.useState("");

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <div className={classes.containerRegister}>
            <Typography variant="h3">
                Account Information
            </Typography>
            <Grid xs={3}>
                <TextField placeholder="E-mail Address" />

            </Grid>
            <Grid sx={3}>
                <TextField placeholder="Password" />

                <TextField placeholder="Confirm Password" />

            </Grid>
            <Grid sx={3}>

                <TextField placeholder="Address" />

                <TextField placeholder="City" />

            </Grid>
            <div className={classes.state}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="state-select"></InputLabel>
                    <Select
                        labelId="state-selector-label"
                        id="state-selector"
                        value={state}
                        onChange={handleChange}
                        autoWidth
                        label="state"
                    >
                        <MenuItem value=" "><em>None</em></MenuItem>
                        <MenuItem>WI</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TextField placeholder="Zip Code" />
            <div >
                <Button className={classes.button}
                    id="submitBtn"
                    color="secondary"
                    variant="contained"
                >
                    Sign-Up
                </Button>
            </div>
        </div>
    )
}

export default Register