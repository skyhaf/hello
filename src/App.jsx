import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import Particles from "react-particles-js";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="hidden lg:contents relative">

          {/* <div className="fixed -z-10" id="particles-js"></div> */}
          <Home className="z-10" />
        </div>

        <div className="bg-primary w-screen min-h-screen lg:hidden flex text-white text-3xl font-head-border text-center justify-center items-center">
          Untuk pengalaman yang lebih nyaman, anda bisa buka di tablet/laptop/pc
        </div>
      </Route>
    </Switch>
  );
}

export default App;
