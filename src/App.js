import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react/lib/ThemeProvider";
import { ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/icons/log.js";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";


function App() {
  return (
    <HashRouter>
      <ThemeProvider withToastContainer>
         <ShellBar
        style={{ backgroundColor: '#756556' }}
        logo={"dashboard.png"}
        profile={"user.png"}
        primaryTitle="Cockpit"
      
	notificationCount={3}
	showNotifications
        
      >
       
        <ShellBarItem src="sap-icon://log" text="logout" />
      </ShellBar>
      
      <Home />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
