import React from "react";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/icons/log.js";
import "@ui5/webcomponents/dist/icons/add.js";
import { Home } from "./Home";
import { useHistory } from "react-router-dom";
export function MyApp() {
  const history = useHistory();
  const handleLogoClick = e => {
    history.push("./");
  };
   
  return (
    <>
    
      <ShellBar
        style={{ "--sapShellColor": "red" }}
        logo={"dashboard.png"}
        onLogoClick={handleLogoClick}
        profile={"user.png"}
        primaryTitle="Cockpit"
        
      >
        <ShellBarItem src="sap-icon://log" text="logout" />
      </ShellBar>
      
      <Home />
    </>
  );
}
