import './App.css';
import Dropdown from './Dropdown';

function App() {
  const listItems = ['Yes', 'Probably Not!'];

  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", background: "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)" }}>
      {/* Contents of list sent through props */}
      <Dropdown listItems={listItems} />
    </div>
  );
}

export default App;
