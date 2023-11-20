import React from "react";
import Navbar from "./components/navbar";
import Banner from "./components/banner";



function App() {
        return <React.Fragment>
            <Navbar/>
            <div className="p-3 text-dark bg-dark border-dark">
                <h1 id="title">Welcome to my Webpage</h1>
                <h1 id="title">My name is Deniz Bickici</h1>
                <br></br>
                <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="invisible-wrapper"  tabindex="0">
                    <Banner name = "About Me" description = "Text" scrollHeader = "scrollspyHeading1" image = "/img/foto.jpg"/>
                    <br></br>
                    <Banner name = "Projects" description = "Text" scrollHeader = "scrollspyHeading2"/>
                    <br></br>
                    <Banner name = "Contact me" description = "Text" scrollHeader = "scrollspyHeading3"/>
                </div>

            </div>
        </React.Fragment>;
    }
 
export default App;