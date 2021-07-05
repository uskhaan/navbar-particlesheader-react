import React from "react";
import Typed from "react-typed";
function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Digitizing Odds</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Web Development","SMM"]}
                typeSpeed= {200}
                backSpeed= {100}
                loop
                />
                <a href="#" className="btn-main-offer">CONTACT</a>
            </div>
        </div>     
   );
}

export default Header
