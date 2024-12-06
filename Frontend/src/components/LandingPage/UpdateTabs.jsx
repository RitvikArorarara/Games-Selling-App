import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { TopUpdateTabs } from "./TopUpdateTabs";
import InfoCard from "./InfoCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UpdateTabs() {
  const [value, setValue] = useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          className="mt-16"
        >
          <Tab label="Role Playing Games" {...a11yProps(0)} />
          <Tab label="First-Person Shooter" {...a11yProps(1)} />
          <Tab label="Multiplayer" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <div>
        <CustomTabPanel value={value} index={0} >
          {/* <TopUpdateTabs type={"MMORPG"} ></TopUpdateTabs> */}
          <InfoCard type={"MMORPG"} ></InfoCard>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        {/* <TopUpdateTabs type={"Shooter"} ></TopUpdateTabs> */}
        <InfoCard type={"Shooter"} ></InfoCard>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        {/* <TopUpdateTabs type={"Strategy"} ></TopUpdateTabs> */}
        <InfoCard type={"Strategy"} ></InfoCard>
        </CustomTabPanel>
      </div>
    </Box>
  );
}
