import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// React Element
// const jsxHeading = (
//   <h1 className="head" tabIndex="1">
//     Hello jee i'm jsx but not HTML? I am like HTML 😃
//   </h1>
// );

const JsxHeading = () => (
  <h1 className="head" tabIndex="1">
    Hello jee i'm jsx but not HTML? I am like HTML 😃
  </h1>
);

const Title = () => (
  <div>
    <h1 className="title">Namaste React</h1>
    {/* Three ways to call components */}
    <JsxHeading />
    {JsxHeading()}
    <JsxHeading></JsxHeading>
  </div>
);
root.render(<JsxHeading />);
