import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Number} from "./components/Number";
import {Hello} from "./components/Hello";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={"/home"} element={<Home />}/>
          <Route path={"/:num"} element={<Number/>}/>
          <Route path={"/:word/:text/:background"} element={<Hello/>}/>
        </Routes>
    </div>
  );
}

export default App;
