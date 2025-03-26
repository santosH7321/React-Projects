import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * Header
 *  -> Logo
 *  -> Nav Items
 *
 * Body
 *   -> Search
 *   -> ResturentContainer
 *   -> ResurentCard
 * Footer
 *   -> Copyright
 *   -> Links
 *   -> Address
 *   -> Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/9Gfp33wFqFFIkV9PDT6LczHkR2dTlgtpN4DVbk8F8og/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MDQxNGIyMWYxZmZj/ZGJiMGQ1YWQ2ODgv/NjZhZDI4YWEwZGMy/NjlkNTlhOGVkYTVh/X0FEXzRuWGYwRC1o/X2tkWXhTdTA3a01z/M2Nidm1tc0liMjhQ/NlZnTFZtN08yelRL/U2xGdkpGUUYxOEpO/dUUzZE9Zb1dzUW43/SmJYd0hDOXViTnlQ/cy1IVUR4M1htN25G/OHVLVEdhRTg1OWNT/REJVZmZBRDU1ZEJN/VjBrd0VScXppa3Rm/MjNtRVdVRTJjdE80/STEtUVVEVnJhcl9T/c0Q1QzUucG5n"
        />
      </div>

      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Card</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const ResturentList = [
  {
    name: "Nishant Ranjan",
    location: "Patna",
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    name: "Santosh Kumar",
    location: "Pune",
    rating: "4.1",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    name: "Nikamal Name",
    location: "Mumbai",
    rating: "3.4",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    name: "Pratik Name",
    location: "Delhi",
    rating: "3.7",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  }
];
const ResturentCard = (props) => {
  const {resData} = props; 
  return (
    <div className="resturent-card">
      <img
        className="resturent-image"
        src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      />
      <div className="resturent-details">
        <h3>Resturent Name</h3>
        <p>Location</p>
        <p>Rating</p>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-container">
      <div>Search</div>
      <div className="resturent-container">
        <ResturentCard />
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
