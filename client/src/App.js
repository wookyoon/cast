import {
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/login/LoginPage";
import Home from "./components/home/HomePage";

function App() {
  

  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/login" exact element={<Login />}/>
    </Routes>
    
  );
}

export default App;
