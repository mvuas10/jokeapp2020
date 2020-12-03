import "./App.css";
import Toolbar from "./components/Toolbar";
import Logo from "./components/images/Logo.png";

function App() {
  return (
    <div>
      <Toolbar logo={Logo} content="Happy end of 2010!" />
    </div>
  );
}

export default App;
