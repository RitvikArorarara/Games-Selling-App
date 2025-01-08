import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const navItems = [
    { title: "Store", path: "/allGames" },
    { title: "Purchases", path: "/purchases" },
  ];

  const drawer = (
    <div className="h-full bg-[#E4E8F1] text-[#24262E]">
      <div className="flex justify-end p-2">
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </div>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.title}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
        {!localStorage.getItem("token") ? (
          <>
            <ListItem
              component={Link}
              to="/signin"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Sign in" />
            </ListItem>
            <ListItem
              component={Link}
              to="/signup"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Sign up" />
            </ListItem>
          </>
        ) : (
          <ListItem button onClick={handleSignOut}>
            <ListItemText primary="Sign out" />
          </ListItem>
        )}
      </List>
    </div>
  );

  return (
    <div position="static" className="  border-[#E4E8F1] text-[#24262E] p-2 bg-[#E4E8F1]">
      <Toolbar className="flex justify-between items-center bg-transparent">
        <Link to="/" className="flex items-center">
          <img src="/gamer.png" alt="Logo" className="h-11 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          {navItems.map((item) => (
            <Button
              key={item.title}
              component={Link}
              to={item.path}
              color="inherit"
              className="text-[#24262E]"
            >
              {item.title.toUpperCase()}
            </Button>
          ))}
          {!localStorage.getItem("token") ? (
            <>
              <Button component={Link} to="/signin" color="inherit">
                SIGN IN
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                SIGN UP
              </Button>
            </>
          ) : (
            <Button onClick={handleSignOut} color="inherit">
              Sign out
            </Button>
          )}
        </div>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          className="block md:hidden"
        >
          {drawer}
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
