import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./pages/AllMeetup";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
