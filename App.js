import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!!");

/**
 * Header
 * - Logo
 * - Nav
 * Body
 * - Search
 * = Restaurant Container
 *      - Restaurant Card
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 * 
 */




//React element
const Title = () => (
   <h1 id="heading" className="head">
    Namaste react using JSX!
  </h1>
);
const title = <h2 className="headin2">This heading 2</h2>
const counter = (x)=>{
     x= x ? x :0;
    return ++x;
};

//React component
//React functional component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {title}
    {counter(2)}
    <h1>Namaste React functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
