import { AppBar, IconButton, Toolbar } from "@mui/material";
import { AccountCircle, Menu } from "@mui/icons-material";
import { MenuProps } from "../../interfaces";
import { drawerWidth } from "../../theme";

const TopAppBar: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <AppBar
      sx={{
        position: "fixed",
        transition: "all 0.4s ease-out",
        ...(!isOpen && {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`
        })
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{
            position: "absolute",
            left: "50px",
            ...(!isOpen && { display: "none" })
          }}
          onClick={() => setIsOpen(false)}
        >
          <Menu />
        </IconButton>
        <IconButton
          color="inherit"
          sx={{ position: "absolute", right: "50px" }}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;