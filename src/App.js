import { Routes, Route } from "react-router-dom"
import { Home } from "./Home";
import { Auth } from "./Auth";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={ <Auth/> } />
        <Route path="/home" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
