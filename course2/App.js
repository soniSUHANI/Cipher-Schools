import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Soni";
  return (
    <>
    <div>
      <h1 style={{
        color: "red",
        textAlign: "center",
      }}>Hello from {name}!</h1>
    </div>
    <div>
      <p>This is a paragraph.</p>
    </div>
    </>
  );
}

export default App;
