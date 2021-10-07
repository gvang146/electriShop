import * as React from 'react';
import {Tabs, 
        Tab, 
        Box, 
        makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    tabColor: {
        background: "secondary",
    },
})

export default function ScrollableTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{minWidth: 100}}>
            <Tabs
                className={classes.tabColor}
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButton="auto"
                aria-label="scrollable auto tabs"
                >
                    <Tab  label="GPU"/>
                    <Tab  label="Keyboards"/>
                    <Tab  label="Mouse"/>
                    <Tab  label="Wires"/>
                    <Tab  label="CPU" />
                    <Tab  label="Motherboards"/>
                    <Tab  label="Misc"/>
                </Tabs>
        </Box>
    );
}