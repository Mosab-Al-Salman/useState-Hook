import { useState } from 'react';
import './App.css';
import './theme.css'; 
import { FaRegSun, FaMoon } from "react-icons/fa6";

function App() {
  const [field, setField] = useState("React");
  const [level, setLevel] = useState("senior");
  const [counter, setcounter] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("myTheme") || "dark");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("myTheme", newTheme);
  };

  const h1Style = {
    fontSize: '28px',
    color: theme === "dark" ? "#ffffff" : theme === "pink" ? "#c2185b" : "#2c3e50",
    marginBottom: '15px',
    fontWeight: 'normal' 
  };

  const btnStyle = {
    padding: '10px 20px',
    fontSize: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    margin: '5px'
  };

  return (
    <div className={`App ${theme}`} style={{ fontFamily: 'sans-serif' }}>
      
      <h1 style={h1Style}>My field is {field}</h1>
      <button style={btnStyle} onClick={() => setField(field === "React" ? "Angular" : "React")}>
        Change Field
      </button>

      <h1 style={h1Style}>I am a {level}</h1>
      <button style={btnStyle} onClick={() => setLevel(level === "senior" ? "mid" : "senior")}>
        Change Level
      </button>

      <h1 style={h1Style}>Counter: {counter}</h1>
      <button style={btnStyle} onClick={() => setcounter(counter + 10)}>
        Increment
      </button>

      <div style={{ marginTop: '30px' }}>
        <button style={btnStyle} onClick={() => changeTheme("light")}>Light</button>
        <button style={btnStyle} onClick={() => changeTheme("dark")}>Dark</button>
        <button style={btnStyle} onClick={() => changeTheme("pink")}>Pink</button>

        <button 
          style={btnStyle} 
          onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaRegSun /> : <FaMoon />}
        </button>
      </div>

    </div>
  );
}

export default App;