// Using JavaScript
// const data = document.createElement("h1");
// data.innerHTML = "Welcome to React";
// document.getElementById("head").appendChild(data);

/*
<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag form child2"),
    React.createElement("h2", {}, "I am h2 tag form child2"),
  ])]
);

// Using React
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello Jee Kaise hai app"
);

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
