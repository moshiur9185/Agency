import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/MainPage/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
