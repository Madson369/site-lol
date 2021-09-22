import Home from "./Home";
import Topo from "./components/Topo.jsx";
import Ranks from "./components/Ranks.jsx";
import Player from "./components/Player";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Topo></Topo>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Ranks" component={Ranks} />
        <Route path="/player/:id" component={Player} />
      </Switch>
    </BrowserRouter>
  );
}
