import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import About from "./views/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
