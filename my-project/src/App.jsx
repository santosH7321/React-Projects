import React, {useState} from 'react'

import Header from './Components/Header';

function App() {
  const [Logo, setLogo] = useState("Santosh");
  const [Home, setHome] = useState("Home");
  const [About, setAbout] = useState("About");
  const [Blog, setBlog] = useState("Blog");
  const [Contact, setContact] = useState("Contact")


  return (
    <>
    <Header 
    Logo={Logo} 
    Home={Home} 
    About={About} 
    Blog={Blog} 
    Contact={Contact}/>
    </>
  );
}

export default App
