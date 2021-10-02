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
        justifyContent: 'center',
        alignContent: 'center',
        margin: 200,

    },
})

function Register({Register}) {
const classes = useStyles();

const [state, setState] = React.useState("");

const handleChange = (event) => {
    setState(event.target.value);
};

return (
    <div className="containerRegister">
        <Typography variant="h3">
                      Account Information
                  </Typography>
        <Grid xs={8}>
                  <TextField placeholder="E-mail Address" />
        </Grid>
                  <TextField placeholder="Password" />
                  <TextField placeholder="Confirm Password" />
                  <TextField placeholder="Address" />
                  <TextField placeholder="City" />
                  <FormControl sx={{m: 1, minWidth: 80}}>
                      <InputLabel id="state-select">State</InputLabel>
                      <Select
                        labelId="state-selector-label"
                        id="state-selector"
                        value={state}
                        onChange={handleChange}
                        autoWidth
                        label="state"
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem>WI</MenuItem>
                        </Select>
                  </FormControl>
                  <TextField placeholder="Zip Code" />

        
    </div>
)
}

export default Register