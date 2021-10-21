import { PropTypes } from "prop-types";
import {
    Button,
    Paper,
    Menu,
    MenuItem,
    MenuList,
    makeStyles,
    IconButton,
    Avatar
} from "@material-ui/core";
import React from 'react';

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    paper: {
        marginRight: 2,
    },
})

export default function UserBtn() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const handleToggle = (event) => {
        setState(true);
    }
    const handleClose = () => {
        setState(false);
    }

    return (
        <div className={classes.root}>
            <IconButton 
                onClick={() => setState(true)}
                aria-owns={state ? "profile-menu" : null}
                aria-haspopup="true">
                <Avatar>G</Avatar>
            </IconButton>
            <Paper className={classes.paper}>
                <Menu
                    id="profile-menu"
                    anchorEl={state}
                    open={Boolean(state)}
                    onClose={handleClose}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Paper>
        </div>
    )
}