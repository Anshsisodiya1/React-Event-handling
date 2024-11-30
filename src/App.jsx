import React, { useState } from "react";
import "./App.css"; 

const EventHandling = () => {
    const [text, setText] = useState("");
    const [dept, setDept] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
            setText(value);
        } else if (name === "dept") {
            setDept(value);
        }
    };

    const handleClick = () => {
        const obj = {
            text: text,
            dept: dept,
        };
        setTodo([...todo, obj]);
        setText("");
        setDept("");
    };

    return (
        <div className="container">
            <h1>Event Handling App</h1>
            <div className="form-group">
                <label className="label">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={text}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your name"
                />
            </div>
            <div className="form-group">
                <label className="label">Department:</label>
                <input
                    type="text"
                    name="dept"
                    value={dept}
                    onChange={handleChange}
                    className="input"
                    placeholder="Enter your department"
                />
            </div>
            <button onClick={handleClick} className="button">
                Add
            </button>
            <ul>
                {todo.map((item, index) => (
                    <li key={index} className="list-item">
                        <span className="text">{item.text}</span>
                        <span className="dept">{item.dept}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventHandling;
