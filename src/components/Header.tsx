import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink to="/chat" bg="#00fffc" textColor="black" text="Go To Chat" />
              <NavigationLink to="/" bg="#51538f" textColor="white" text="logout" onClick={auth?.logout} />
            </>
          ) : (
            <>
            <NavigationLink to="/login" bg="#00fffc" textColor="black" text="Login" />
            <NavigationLink to="/signup" bg="#51538f" textColor="white" text="Signup" />
          </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
