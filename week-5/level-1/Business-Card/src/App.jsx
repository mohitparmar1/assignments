import React from "react";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <div>
      <BusinessCard
        name={"Mohit Parmar"}
        desc={"i love problem solving"}
        interest={["coding ", "open source", "Javascript"]}
        socialLinks={{
          linkedin: "https://www.linkedin.com/in/mohit-parmar-5b5b5b5b5/",
          twitter: "https://twitter.com/mohitparmar1_",
          other: {
            label: "Medium",
            url: "https://medium.com/@mohitparmar5b",
          }
        }}
      />
    </div>
  );
}

export default App;
