//const parent =React.createElement("div",{id:"parent"},
//React.createElement("div",{id:"child"},
//[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")]));

const parent =React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"I am H1 tag"),React.createElement("h2",{},"I am H2 tag")])],
[React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am child2 H1 tag"),React.createElement("h2",{},"I am child H2 tag")])],

);



//const heading =  React.createElement("h1",{id:"heading",xyz:"test"},"Hello World from React!");
//console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);