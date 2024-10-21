const child1 = React.createElement("h1",{id:"child11"},"This is first of first children")
const child2 = React.createElement("h2",{id:"child12"},"This is second  of first children")
const child3 = React.createElement("h1",{id:"child21"},"This is first of second children")
const child4 = React.createElement("h2",{id:"child22"},"This is second of second children")

const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[child1,child2]),React.createElement("div",{id:"child1"},[child3,child4])])
const heading = React.createElement("h1",{id:"heading"},"Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);