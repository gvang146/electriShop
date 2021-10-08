import * as React from 'react';
import {Tabs, 
        Tab, 
        Box, 
        makeStyles,
        Typography,
} from '@material-ui/core';
import PropTypes from "prop-types";
import GPUcards from "../items/Gpucards";
import KeyboardCards from "../items/Keyboardcards";
import MouseCards from "../items/Mousecards";
import WireCards from "../items/Wirescards";
import CPUcards from "../items/Cpucards";
import MoboCards from "../items/Mobocards";
import MiscCards from "../items/Misccards";


const useStyles = makeStyles({
    tabColor: {
        background: "secondary",
    },
})

function TabPanel(props) {
    const { children, value, index, ...other} = props;

    return (
        <div
            role ="tabpanel"
            hidden={value !== index}
            id={`simple-tab${index}`}
            {...other}>
                {value === index && (
                    <Box sx={{p:3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id:`simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function ScrollableTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleTabs = (e, val) => {
        console.warn(val);
        setValue(val);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{minWidth: 100}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}} >
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
            <TabPanel value={value} index={0}> 
                <GPUcards />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <KeyboardCards />
            </TabPanel>
            <TabPanel value={value} index={2}> 
                <MouseCards />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <WireCards />
            </TabPanel>
            <TabPanel value={value} index={4}> 
                <CPUcards />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <MoboCards />
            </TabPanel>
            <TabPanel value={value} index={6}> 
                <MiscCards />
            </TabPanel>
            
        </Box>
    );
}