import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import Particles from "react-particles-js";


function App() {
  return (

      <Switch>
        <Route exact path="/">
    
          <Home />
          
        </Route>
      </Switch>

  );
}

export default App;
