// import React from "react";
// import Logo from '../assets/brand_logo.png';
function Navigation(){
    return(
        <div>
            <nav>
                <div>
                    <img src="../assets/brand_logo.png" alt="logo" />
                </div>

            
                    <ul>
                        <li href="#">Menu</li>
                        <li href="#">Location</li>
                        <li href="#">About</li>
                        <li href="#">Contact</li>
                    </ul>

                <button>Login</button>
            </nav>
        </div>
    );
}

export default Navigation;