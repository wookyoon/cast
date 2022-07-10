import {
  Routes,
  Route
} from "react-router-dom";
import About from "./about";

function App() {
  return (
    <Routes>
      <Route path="/about" exact element={<About />}/>
    </Routes>
  );
}

export default App;
