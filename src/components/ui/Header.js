import { AppBar, Toolbar } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>LifeStyles</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;
