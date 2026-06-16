import './App.css';
import "./theme.css";
import { useReducer } from 'react';
import { FaRegSun, FaMoon } from "react-icons/fa6";
import { Link } from "react-router-dom";

const initialScore = { field: "React", level: "mid", count: 0, theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
      
    case "CHANGE_FIELD":
      return { ...state, field: state.field === "React" ? "Angular" : "React" };
      
    case "CHANGE_LEVEL":
      return { ...state, level: state.level === "mid" ? "senior" : "mid" };
      
    case "SET_THEME":
      return { ...state, theme: action.payload };
      
    default:
      return state;
  }
};

function App() {
  const [Data, dispatch] = useReducer(reducer, initialScore);

  const h1Style = {
    fontSize: '28px',
    color: Data.theme === "dark" ? "#ffffff" : Data.theme === "pink" ? "#c2185b" : "#2c3e50",
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
    <div className={`App ${Data.theme}`} style={{ fontFamily: 'sans-serif', minHeight: '100vh', padding: '20px' }}>
      
      <h1 style={h1Style}>My field is {Data.field}</h1>
      <button style={btnStyle} onClick={() => dispatch({ type: "CHANGE_FIELD" })}>
        Change Field
      </button>

      <h1 style={h1Style}>My level is {Data.level}</h1>
      <button style={btnStyle} onClick={() => dispatch({ type: "CHANGE_LEVEL" })}>
        Change Level
      </button>

      <h1 style={h1Style}>Counter: {Data.count}</h1>
      <button style={btnStyle} onClick={() => dispatch({ type: "INCREASE" })}>
        Increment
      </button>

      <div style={{ marginTop: '30px' }}>
        <button 
          style={{ ...btnStyle, marginRight: "40px" }}
          onClick={() => dispatch({ type: "SET_THEME", payload: "light" })}
        >
          Light
        </button>
        <button 
          style={{ ...btnStyle, marginRight: "40px" }}
          onClick={() => dispatch({ type: "SET_THEME", payload: "dark" })}
        >
          Dark
        </button>
        <button 
          style={btnStyle}
          onClick={() => dispatch({ type: "SET_THEME", payload: "pink" })}
        >
          Pink
        </button>
      </div>

      <div>
        <button 
          style={{ ...btnStyle, marginTop: "30px" }}
          onClick={() => {
            dispatch({ type: "SET_THEME", payload: Data.theme === "dark" ? "light" : "dark" });
          }}
        >
          {Data.theme === "dark" ? <FaRegSun /> : <FaMoon />}
        </button>
      </div>

      <Link to="/Home">
        <button style={{ ...btnStyle, marginTop: "30px" }}>Go To Home Page</button>
      </Link>

    </div>
  );
}

export default App;