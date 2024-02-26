import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <div>
      <Header />
      <Content />
      <br></br>

      <Footer />
    </div>
  );
}

function Header() {
  return <h1 id="header">Quzi App</h1>;
}

function Footer() {
  return <h1 id="footer">Footer of Quzi App</h1>;
}

function Content() {
  function getResults(event) {
    let marks = 0;
    let a = event.target.q1.value;
    if (a === "OOPs") {
      marks++;
    }
    let b = event.target.q2.value;
    if (b === "Both Client and Server") {
      marks++;
    }
    alert("Your marks is " + marks);
  }
  return (
    <form onSubmit={getResults}>
      <div id="con">
        <center>
          <h1 style={{ color: "green" }}>MCQs</h1>
        </center>
        <Question
          q="What is Java?"
          op1="OOPs"
          op2="POP"
          op3="SOP"
          op4="UnSOP"
          name="q1"
        />
        <Question
          q="Is Python client side or server side scripting language?"
          op1="Client side"
          op2="Server side"
          op3="Both Client and Server"
          op4="None"
          name="q2"
        />
        <center>
          <input type="submit" value="Submit"></input>
        </center>
      </div>
    </form>
  );
}

function Question(props) {
  return (
    <div>
      <h1>{props.q}</h1>
      <input type="radio" name={props.name} value={props.op1}></input>
      {props.op1}
      <br></br>
      <input type="radio" name={props.name} value={props.op2}></input>
      {props.op2}
      <br></br>
      <input type="radio" name={props.name} value={props.op3}></input>
      {props.op3}
      <br></br>
      <input type="radio" name={props.name} value={props.op4}></input>
      {props.op4}
      <br></br>
    </div>
  );
}
