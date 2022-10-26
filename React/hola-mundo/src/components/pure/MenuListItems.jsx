import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <HomeIcon />;
    case "TASKS":
      return <HomeIcon />;
    case "SETTINGS":
      return <SettingsIcon />;
    default:
      return <HomeIcon />;
  }
};

const MenuListItems = ({ list }) => {
  const nav = useNavigate();
  const navigateTo = (path) => {
    nav.push(path);
  };
  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} button onClick={() => navigateTo(path)}>
          <ListItemIcon>{getIcon(icon)}</ListItemIcon>
          <ListItemText primary={text}></ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
