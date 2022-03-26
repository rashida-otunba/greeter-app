// import logo from "./logo.svg";
import "./App.css";
import Greeter from "./components/Greeter";
// const nameArr=[
//   "Prue", "Piper", "Phoebe", "Paige"
// ]
import nameArr from './data'

// name === prop and you can pass in what you want
// Babbel likes array methods 
function App() {
  return (
    <div className="App">
      <h1 className="greeting"> Hello React </h1>
      {
        nameArr.map(n=>
        <Greeter name ={n.name} age ={n.age} />
        
        )
        }
    </div>
  );
}

export default App;
