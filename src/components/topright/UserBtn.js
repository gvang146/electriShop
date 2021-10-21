import {
    Box,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
    IconButton,
    Tooltip,
    makeStyles
} from "@material-ui/core";
import {
    Settings
} from "@material-ui/icons";
import { typography } from "@mui/system";
import React from "react";

const useStyles = makeStyles({
    boxContainer: {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
    },
    typography: {
        minWidth: 100,
    },
    icon: {
        ml: 2,
    },
    avatar: {
        width: 32,
        height: 32,
    },
})

export default function AccountMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const open = Boolean(state);
    const handleClick = (event) => {
        setState(event.currentTarget);
    };
    const handleClose = () => {
        setState(false);
    }
    return (
        <React.Fragment>
            <Box className={classes.boxContainer}>
                <Tooltip title="Account Settings">
                    <IconButton onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}>
                        <Avatar className={classes.avatar}>G</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={state}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar /> My Account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    )
}