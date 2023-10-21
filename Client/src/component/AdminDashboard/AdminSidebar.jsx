import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Dashboard from "./Dashboard";
import ManageStudent from "./ManageStudent";
import ManageTeachers from "./ManageTeachers";
import CreateAdmin from "./CreateAdmin";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const tokenExpirationTime = 60 * 60 * 1000;
  const Navigate = useNavigate();

  const checkLogin = () => {
    const token = localStorage.getItem("admin");
    if (!token) {
      Navigate("/login");
    } else {
      setTimeout(() => {
        localStorage.removeItem("admin");
      }, tokenExpirationTime);
    }
  };
  React.useEffect(() => {
    checkLogin();
  });
  const Logout = () => {
    localStorage.removeItem("admin");
    Navigate("/login");
  };
  const drawerButton = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "Manage Students",
      icon: <ManageAccountsIcon />,
    },
    {
      name: "Manage Teachers",
      icon: <ManageAccountsIcon />,
    },
    {
      name: "Create Admin",
      icon: <AddCircleOutlineIcon />,
    },
    {
      name: "Create Blogs",
      icon: <ModeEditOutlineIcon />,
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      action: Logout,
    },
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState("Dashboard"); // Initial selected page
  // Map the selected page name to the corresponding component
  const selectedPageComponent = {
    Dashboard: <Dashboard />,
    // Profile: <ProfilePage />,
    "Manage Students": <ManageStudent />,
    "Manage Teachers": <ManageTeachers />,
    "Create Admin": <CreateAdmin />,
    "Create Blogs": <Blogs />,
    // ... other page components ...
  };
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ backgroundColor: "#0091ea" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ display: { sm: "block", md: "none" } }} // Hide in mobile view, show in desktop
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flex: { xs: 1, md: 2 }, textAlign: "center" }}
          >
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Box maxHeight="500px" sx={{ display: "flex" }}> */}
      <Drawer
        variant="permanent"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0091ea",
          },

          display: { xs: "none", md: "block" },
          overflow: "auto",
          height: "auto",
        }}
      >
        <Toolbar />
        <Box height="100%" sx={{ overflow: "auto", color: "white" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {drawerButton.map(({ name, icon, action }, index) => (
              <Box key={index} mb={index === 4 ? 8 : 2}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={action || (() => setSelectedPage(name))}
                  >
                    <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
      <Drawer
        variant="temporary" // <-- Set variant to "temporary" for mobile view
        open={drawerOpen}
        // open={{ xs: drawerOpen, md: true }}
        // onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0091ea",
          },
          display: { sm: "none", md: "none" },
        }}
      >
        <Toolbar />
        <Box height="100%" sx={{ overflow: "auto", color: "white" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {drawerButton.map(({ name, icon }, index) => (
              <Box key={index} mb={index === 4 ? 8 : 2}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setSelectedPage(name)}>
                    <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          // minWidth: "100%",
          flexGrow: 1,
          overflowX: "auto",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <Toolbar />
        {selectedPageComponent[selectedPage]}
      </Box>
    </Box>
  );
}
