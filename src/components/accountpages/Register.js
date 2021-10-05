import {
    makeStyles,
    TextField,
    Typography,
    Button,
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
} from '@material-ui/core'
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
        alignContent: 'center',
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
    },
    title: {
        marginBottom: 10,
        marginTop: -160,
    },
})

function Register({ history }) {
    const classes = useStyles();

    const [state, setState] = React.useState("");

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <div className={classes.containerRegister}>
            <div>
                <Typography variant="h3" className={classes.title}>
                    Account Information
                </Typography>
            </div>
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
                        <MenuItem value="None"><em>None</em></MenuItem>
                        <MenuItem value="AK">AK</MenuItem>
                        <MenuItem value="AL">AL</MenuItem>
                        <MenuItem value="AR">AR</MenuItem>
                        <MenuItem value="AZ">AZ</MenuItem>
                        <MenuItem value="CA">CA</MenuItem>
                        <MenuItem value="CO">CO</MenuItem>
                        <MenuItem value="CT">CT</MenuItem>
                        <MenuItem value="DE">DE</MenuItem>
                        <MenuItem value="FL">FL</MenuItem>
                        <MenuItem value="GA">GA</MenuItem>
                        <MenuItem value="HI">HI</MenuItem>
                        <MenuItem value="IA">IA</MenuItem>
                        <MenuItem value="ID">ID</MenuItem>
                        <MenuItem value="IL">IL</MenuItem>
                        <MenuItem value="IN">IN</MenuItem>
                        <MenuItem value="KS">KS</MenuItem>
                        <MenuItem value="KY">KY</MenuItem>
                        <MenuItem value="LA">LA</MenuItem>
                        <MenuItem value="MA">MA</MenuItem>
                        <MenuItem value="MD">MD</MenuItem>
                        <MenuItem value="ME">ME</MenuItem>
                        <MenuItem value="MI">MI</MenuItem>
                        <MenuItem value="MN">MN</MenuItem>
                        <MenuItem value="MO">MO</MenuItem>
                        <MenuItem value="MS">MS</MenuItem>
                        <MenuItem value="MT">MT</MenuItem>
                        <MenuItem value="NC">NC</MenuItem>
                        <MenuItem value="ND">ND</MenuItem>
                        <MenuItem value="NE">NE</MenuItem>
                        <MenuItem value="NH">NH</MenuItem>
                        <MenuItem value="NJ">NJ</MenuItem>
                        <MenuItem value="NM">NM</MenuItem>
                        <MenuItem value="NV">NV</MenuItem>
                        <MenuItem value="NY">NY</MenuItem>
                        <MenuItem value="OH">OH</MenuItem>
                        <MenuItem value="OK">OK</MenuItem>
                        <MenuItem value="OR">OR</MenuItem>
                        <MenuItem value="PA">PA</MenuItem>
                        <MenuItem value="RI">RI</MenuItem>
                        <MenuItem value="SC">SC</MenuItem>
                        <MenuItem value="SD">SD</MenuItem>
                        <MenuItem value="TN">TN</MenuItem>
                        <MenuItem value="TX">TX</MenuItem>
                        <MenuItem value="UT">UT</MenuItem>
                        <MenuItem value="VA">VA</MenuItem>
                        <MenuItem value="VT">VT</MenuItem>
                        <MenuItem value="WA">WA</MenuItem>
                        <MenuItem value="WI">WI</MenuItem>
                        <MenuItem value="WV">WV</MenuItem>
                        <MenuItem value="WY">WY</MenuItem>
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