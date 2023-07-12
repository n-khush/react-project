
const parent = React.createElement("div",{id:"parent"},
[ 
    React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{id:"c1c1"},"I'm and H1 tag child 1 of child1 of parent"),
        React.createElement("h2",{id:"c1c2"},"I'm and H2 tag child 2 of child1 of parent")
    ]),
    React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{id:"c2c1"},"I'm and H1 tag child 1 of child2 of parent"),
        React.createElement("h2",{id:"c2c2"},"I'm and H2 tag child 2 of child2 of parent")
    ])
])

const heading = React.createElement(
  "h1", 
  { id: "heading" },
  "Hello World from React! "
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
