import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDoAdd from "./ToDoAdd";
import Counter1 from "./Counter1";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>To-Do List</h1>
                </div>
                <Counter1 init={1}></Counter1>
                <ToDoAdd></ToDoAdd>
            </header>
        </div>
    );
}

export default App;
