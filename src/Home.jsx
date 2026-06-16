import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: '#fafafa'
  };

  const titleStyle = {
    margin: 0, 
    fontSize: '36px', 
    fontWeight: '400', 
    color: '#333333'
  };

  const btnStyle = {
    padding: '10px 24px',
    fontSize: '14px',
    backgroundColor: '#4a90e2', 
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '24px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Home Page</h1>
      <Link to="/" style={btnStyle}>
        Go Back
      </Link>
    </div>
  );
}

export default Home;