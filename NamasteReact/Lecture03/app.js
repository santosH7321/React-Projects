import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// React Element
// const jsxHeading = (
//   <h1 className="head" tabIndex="1">
//     Hello jee i'm jsx but not HTML? I am like HTML 😃
//   </h1>
// );

// const JsxHeading = () => (
//   <h1 className="head" tabIndex="1">
//     Hello jee i'm jsx but not HTML? I am like HTML 😃
//   </h1>
// );

// const Title = () => (
//   <div>
//     <h1 className="title">Namaste React</h1>
//     {/* Three ways to call components */}
//     <JsxHeading />
//     {JsxHeading()}
//     <JsxHeading></JsxHeading>
//   </div>
// );



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://imgs.search.brave.com/1E4CGIiULumNV0QRA-5JZMkkj4ap6D_mNXMc_Dajaho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYmVhdXRpZnVs/LXVuaXF1ZS1mb29k/LXJlc3RhdXJhbnQt/Y29tcGFueS1sb2dv/LWRlc2lnbl85ODEx/NTAtMjE3MS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" alt="Image" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  );
};

const AppLayout = () => {
  return <div className="app">
    <Header />
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


