import * as React from 'react';
import {Tabs, Tab, Box} from '@material-ui/core';


export default function ScrollableTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{minWidth: 100, bgcolor: 'background.paper'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButton="auto"
                aria-label="scrollable auto tabs"
                >
                    <Tab label="GPU"/>
                    <Tab label="Keyboards"/>
                    <Tab label="Mouse"/>
                    <Tab label="Wires"/>
                    <Tab label="CPU" />
                    <Tab label="Motherboards"/>
                    <Tab label="Misc"/>
                </Tabs>
        </Box>
    );
}