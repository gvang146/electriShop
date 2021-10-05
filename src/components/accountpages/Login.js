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
import useState from 'react'


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
        margin: 200,

    },
})

function Login({ history }) {
    const classes = useStyles();

    return (
        <div className={classes.containerLogin}>
            <Grid justifyContent="center"
                wrap="wrap">
                <Typography variant="h6">
                    E-mail Address:
                </Typography>
                <TextField placeholder="E-mail Address" />
                <Typography variant="h6">
                    Password:
                </Typography>
                <TextField placeholder="Password" />
                <div>
                <Button variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="submit"> Login </Button>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me"/>                </div>
                <Link href="#" variant="body2">
                    Forgot Password?
                </Link>
                <div>
                    <Link href="/Register" variant="6">
                        Don't Have an account yet? Sign-Up
                    </Link>
                </div>
            </Grid>

        </div>
    )


}

export default Login