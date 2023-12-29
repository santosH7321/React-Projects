import Navigation from "./Navigation";
import { useState } from "react";

function Nav() {
  const [Logo, setLogo] = useState("Santosh");
  const [Home, setHome] = useState("Home");
  const [About, setAbout] = useState("About");
  const [Service, setService] = useState("Service");
  const [Contact, setContact] = useState("Contact");
  const [Login, setLogin] = useState("Login")


  return (
    <>
    <Navigation 
    Logo={Logo} 
    Home={Home} 
    About={About} 
    Service={Service} 
    Contact={Contact}
    Login={Login}
    />
    </>
  );
}

export default Nav
